# KenyaHub Android app

This is the native React Native/Expo Android application for KenyaHub. It includes the public tools, matatu route references, saved tools, and bundled offline data. The website remains the administration surface for Appwrite-backed blog and translation management.

## Development

```powershell
npm install
npm run sync-data
npx expo start
```

## Build an installable APK

Install and authenticate with EAS once:

```powershell
npm install -g eas-cli
eas login
eas build:configure
npm run build:apk
```

The `preview` profile produces an installable Android APK. The `production` profile produces an Android App Bundle for Google Play.
