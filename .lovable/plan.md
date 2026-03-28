

# Fix Firebase Secret & Complete Integration

## The Problem
The `FIREBASE_SERVICE_ACCOUNT_KEY` secret currently contains just the key ID (`c3841f828e...`) instead of the full service account JSON. The edge function crashes with `SyntaxError: Unexpected token 'c'` because it tries to `JSON.parse()` a plain string.

## The Fix
1. **Update the secret** — Replace the current value with the **entire contents** of the `mini-eam-monorepo-c3841f828e13.json` file you downloaded earlier. Open that file in a text editor, select all (Ctrl+A / Cmd+A), copy it, and paste it when prompted.

2. **Test the edge function** — Call the `firebase-inventory` endpoint to verify it connects to Firestore and returns vehicle data.

3. **Fix any issues** — If the Firestore collection name or data shape differs from what the edge function expects, update the function accordingly.

## What You Need To Do
When I prompt you to update the secret, open the JSON key file in any text editor and paste the **entire file contents** (starts with `{` and ends with `}`). It should look like:
```text
{
  "type": "service_account",
  "project_id": "mini-eam-monorepo",
  "private_key_id": "c3841f828e13...",
  "private_key": "-----BEGIN RSA PRIVATE KEY-----\n...",
  ...
}
```

## After the Secret is Fixed
- Test the edge function returns vehicles
- Verify the homepage carousel loads real inventory
- Verify the Latest Arrivals page shows filterable vehicles
- Verify vehicle detail pages show photos and specs
- Test the Request Parts form submission

