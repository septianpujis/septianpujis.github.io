/**
 * Environment Configuration
 * This file manages different environment settings for development and production
 */

const ENVIRONMENT = {
    // Current environment - change this to switch between dev/prod
    current: 'development', // 'development' or 'production'

    // Development settings
    development: {
        firebase: {
            apiKey: "AIzaSyDIKDSWrWtwTkZpSlGAb7RRlmFnxQLx0aU",
            authDomain: "septiliya-wedding.firebaseapp.com",
            projectId: "septiliya-wedding",
            storageBucket: "septiliya-wedding.firebasestorage.app",
            messagingSenderId: "404011864478",
            appId: "1:404011864478:web:cacbfe28f3ff00ce38868f"
        },
        features: {
            enableMockData: true,
            enableDebugLogging: true,
            enableNotifications: true
        },
        api: {
            baseUrl: "http://localhost:8000",
            timeout: 5000
        }
    },

    // Production settings
    production: {
        firebase: {
            apiKey: "AIzaSyDIKDSWrWtwTkZpSlGAb7RRlmFnxQLx0aU",
            authDomain: "septiliya-wedding.firebaseapp.com",
            projectId: "septiliya-wedding",
            storageBucket: "septiliya-wedding.firebasestorage.app",
            messagingSenderId: "404011864478",
            appId: "1:404011864478:web:cacbfe28f3ff00ce38868f"
        },
        features: {
            enableMockData: false,
            enableDebugLogging: false,
            enableNotifications: true
        },
        api: {
            baseUrl: "https://septiliya.online",
            timeout: 10000
        }
    }
};

// Get current environment config
function getCurrentConfig() {
    return ENVIRONMENT[ENVIRONMENT.current];
}

// Get specific config section
function getConfig(section) {
    const config = getCurrentConfig();
    return config[section] || {};
}

// Check if feature is enabled
function isFeatureEnabled(feature) {
    const features = getConfig('features');
    return features[feature] === true;
}

// Get Firebase config for current environment
function getFirebaseConfig() {
    return getConfig('firebase');
}

// Get API config for current environment
function getApiConfig() {
    return getConfig('api');
}

// Switch environment (useful for testing)
function switchEnvironment(env) {
    if (ENVIRONMENT[env]) {
        ENVIRONMENT.current = env;
        console.log(`Switched to ${env} environment`);

        // Update Firebase config if RSVP manager exists
        if (window.rsvpManager) {
            window.rsvpManager.updateFirebaseConfig(getFirebaseConfig());
        }

        return true;
    } else {
        console.error(`Environment '${env}' not found`);
        return false;
    }
}

// Log current environment info
function logEnvironmentInfo() {
    const config = getCurrentConfig();
    console.log(`Current Environment: ${ENVIRONMENT.current}`);
    console.log('Environment Config:', config);
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ENVIRONMENT,
        getCurrentConfig,
        getConfig,
        isFeatureEnabled,
        getFirebaseConfig,
        getApiConfig,
        switchEnvironment,
        logEnvironmentInfo
    };
} else {
    // Browser environment
    window.ENVIRONMENT = ENVIRONMENT;
    window.getCurrentConfig = getCurrentConfig;
    window.getConfig = getConfig;
    window.isFeatureEnabled = isFeatureEnabled;
    window.getFirebaseConfig = getFirebaseConfig;
    window.getApiConfig = getApiConfig;
    window.switchEnvironment = switchEnvironment;
    window.logEnvironmentInfo = logEnvironmentInfo;

    // Auto-log environment info in development
    if (ENVIRONMENT.current === 'development') {
        console.log('Environment module loaded');
        logEnvironmentInfo();
    }
}
