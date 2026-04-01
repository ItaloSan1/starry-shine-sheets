

# Fix MongoDB Connection — Update Secret

## Problem
The `mongo-inventory` backend function is failing with "bad auth: authentication failed" because the stored MongoDB connection string has an incorrect password.

## Solution
Update the `MONGODB_CONNECTION_STRING` secret to the correct value:
`mongodb+srv://nodejsApp:fVfDBmGQvRKngDTU@auctionsdbcluster.akj4u.mongodb.net/yard-app?retryWrites=true&w=majority`

## Steps
1. Update the `MONGODB_CONNECTION_STRING` secret using the secrets tool
2. The backend function will automatically pick up the new value on next invocation
3. Latest Arrivals, vehicle pages, and all inventory features will resume working

No code changes needed — this is purely a secret/credential update.

