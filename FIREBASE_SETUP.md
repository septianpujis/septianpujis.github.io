# Firebase Setup for RSVP System

This document explains how to configure Firebase for the RSVP system in your wedding invitation website.

## Prerequisites

1. A Google account
2. Basic knowledge of Firebase services

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name (e.g., "septian-liya-wedding")
4. Choose whether to enable Google Analytics (recommended)
5. Click "Create project"

## Step 2: Add Web App

1. In your Firebase project, click the web icon (</>) to add a web app
2. Enter an app nickname (e.g., "Wedding Website")
3. Check "Also set up Firebase Hosting" if you want to host your site
4. Click "Register app"
5. Copy the configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
};
```

## Step 3: Update Configuration Files

### Update `assets/js/firebase-config.js`

Replace the placeholder values with your actual Firebase configuration:

```javascript
const FIREBASE_CONFIG = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
};
```

### Update `assets/js/rsvp.js`

The RSVP manager will automatically use the configuration from `firebase-config.js`.

## Step 4: Enable Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" for development (you can secure it later)
4. Select a location close to your users
5. Click "Done"

## Step 5: Set Up Firestore Collections

The system will automatically create these collections when the first RSVP is submitted:

- `rsvp_responses` - Stores RSVP form submissions
- `sweet_messages` - Stores guest messages
- `users` - Stores user information (if authentication is enabled)

## Step 6: Security Rules (Optional but Recommended)

In Firestore Database > Rules, you can set up security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read and write RSVP responses
    match /rsvp_responses/{document} {
      allow read, write: if true;
    }

    // Allow anyone to read and write sweet messages
    match /sweet_messages/{document} {
      allow read, write: if true;
    }

    // Restrict user access if needed
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Step 7: Test the System

1. Open your website
2. Navigate to the RSVP section
3. Fill out and submit the RSVP form
4. Check Firebase Console > Firestore Database to see if data is being stored

## Step 8: Monitor Usage

- Go to Firebase Console > Usage and billing to monitor your project usage
- Firestore has a generous free tier (1GB storage, 50,000 reads/day, 20,000 writes/day)

## Troubleshooting

### Common Issues

1. **"Firebase not initialized" error**

   - Check if `firebase-config.js` is loaded before `rsvp.js`
   - Verify your Firebase configuration values

2. **"Permission denied" error**

   - Check Firestore security rules
   - Ensure your project is properly set up

3. **Data not appearing in Firestore**
   - Check browser console for errors
   - Verify network connectivity
   - Check if Firestore is enabled in your project

### Debug Mode

To enable debug mode, open browser console and run:

```javascript
// Check if RSVP manager is loaded
console.log(window.rsvpManager);

// Check Firebase configuration
console.log(window.FIREBASE_CONFIG);

// Test RSVP submission
window.rsvpManager.handleRSVPSubmit({ preventDefault: () => {} });
```

## Next Steps

Once Firebase is working:

1. **Customize the UI** - Modify the RSVP form styling
2. **Add Authentication** - Implement user login if needed
3. **Real-time Updates** - Enable real-time message updates
4. **Analytics** - Track RSVP submissions and user behavior
5. **Backup** - Set up automated backups of your data

## Support

If you encounter issues:

1. Check the [Firebase Documentation](https://firebase.google.com/docs)
2. Review browser console for error messages
3. Verify your configuration values
4. Test with a simple Firebase project first

## Security Notes

- Never expose your Firebase API keys in public repositories
- Use environment variables for production deployments
- Regularly review and update security rules
- Monitor your Firebase project for unusual activity
