/**
 * Firebase Configuration
 * This file contains all Firebase environment settings
 * Update these values with your actual Firebase project configuration
 */

const FIREBASE_CONFIG = {
    // Firebase Web App ConfigurationapiKey: "AIzaSyDIKDSWrWtwTkZpSlGAb7RRlmFnxQLx0aU",
    authDomain: "septiliya-wedding.firebaseapp.com",
    projectId: "septiliya-wedding",
    storageBucket: "septiliya-wedding.firebasestorage.app",
    messagingSenderId: "404011864478",
    appId: "1:404011864478:web:cacbfe28f3ff00ce38868f"

};

// Firebase Authentication settings
const AUTH_CONFIG = {
    // Enable/disable authentication methods
    signInOptions: [
        'email',
        'phone',
        'google',
        'facebook'
    ],

    // Custom authentication settings
    customParameters: {
        // Add any custom parameters here
    }
};

// Firestore Database settings
const FIRESTORE_CONFIG = {
    // Collection names
    collections: {
        rsvp: 'rsvp_responses',
        messages: 'sweet_messages',
        users: 'users'
    },

    // Security rules (for reference)
    securityRules: {
        rsvp: {
            read: true,  // Anyone can read RSVP responses
            write: true  // Anyone can write RSVP responses
        },
        messages: {
            read: true,  // Anyone can read messages
            write: true  // Anyone can write messages
        }
    }
};

// Export configurations
if (typeof module !== 'undefined' && module.exports) {
    // Node.js environment
    module.exports = {
        FIREBASE_CONFIG,
        AUTH_CONFIG,
        FIRESTORE_CONFIG
    };
} else {
    // Browser environment
    window.FIREBASE_CONFIG = FIREBASE_CONFIG;
    window.AUTH_CONFIG = AUTH_CONFIG;
    window.FIRESTORE_CONFIG = FIRESTORE_CONFIG;
}
