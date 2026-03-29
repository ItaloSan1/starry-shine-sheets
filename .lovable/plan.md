

# Fix: Firebase Storage Images Not Loading

## Problem
Vehicle images use direct Firebase Storage URLs (`https://firebasestorage.googleapis.com/v0/b/mini-eam-monorepo.appspot.com/o/...?alt=media`). These fail because the Firebase Storage security rules require authentication — the browser has no Firebase auth token.

## Solution
Generate **token-authenticated URLs** server-side by appending the OAuth2 access token to each image URL. The edge function already has a valid access token from the service account. We append `&token=...` or use the `Authorization` header approach.

**Better approach**: Since tokens expire in 1 hour, we should use the **Firebase Storage download tokens** embedded in the file metadata. Alternatively, the simplest fix is to **proxy images through a new edge function endpoint** or generate signed URLs using the Google Cloud Storage JSON API.

**Recommended approach — Signed URL generation:**

### Step 1: Update `firebase-inventory/index.ts`
- Add a function that generates signed URLs for Firebase Storage objects using the service account's private key
- Each signed URL is valid for 1 hour (matching the cache TTL)
- Replace all `getStorageUrl()` calls with `getSignedUrl()` that produces URLs like:
  ```
  https://storage.googleapis.com/mini-eam-monorepo.appspot.com/vehicles-post-dismantle/...?X-Goog-Algorithm=...&X-Goog-Signature=...
  ```

### Step 2: Alternative simpler approach — append access token
- Append `?alt=media&token=ACCESS_TOKEN` to each Firebase Storage URL
- The OAuth2 access token from the service account already has `cloud-platform` scope
- Change `getStorageUrl` to accept the access token and append it

**Simplest working approach**: Use the Google Cloud Storage JSON API to get the `downloadTokens` metadata for each file, then append that token. But this would require extra API calls per image.

**Most practical approach**: Generate V4 signed URLs using the service account private key directly in the edge function. This avoids extra API calls and produces URLs that work for 1 hour (aligned with the 5-minute cache TTL).

### Files Changed
| File | Change |
|------|--------|
| `supabase/functions/firebase-inventory/index.ts` | Replace `getStorageUrl()` with `generateSignedUrl()` that creates V4 signed URLs using the service account private key. Update `extractVehiclesFromTasks()` and the vehicle detail handler to use signed URLs. |

### How Signed URLs Work
1. Construct a canonical request string with the bucket, object path, expiration
2. Sign it with the service account's RSA private key (already available)
3. Output a URL like `https://storage.googleapis.com/BUCKET/OBJECT?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=...&X-Goog-Expires=3600&X-Goog-Signature=...`
4. These URLs work without any auth — the browser can load them directly as `<img src="...">`

### Risk
- Signed URLs expire after 1 hour; the edge function cache is 5 minutes, so vehicles data refreshes well within the window
- The private key is already in memory for JWT signing, so no new secrets needed

