/**
 * RSVP Management System
 * Handles RSVP form submission and message display
 * Integrated with Firebase Firestore
 */

class RSVPManager {
    constructor() {
        // Try to get Firebase config from environment or fallback to default
        this.firebaseConfig = this.getFirebaseConfig();

        this.messages = [];
        this.isFirebaseInitialized = false;
        this.db = null;
        this.auth = null;

        this.init();
    }

    init() {
        this.loadSweetMessages();
        this.bindEvents();

        // Initialize Firebase with a slight delay to ensure DOM is ready
        setTimeout(() => {
            this.initializeFirebase();
        }, 100);
    }

    /**
     * Initialize Firebase with real configuration
     */
    async initializeFirebase() {
        try {
            // Check if Firebase is already loaded
            if (typeof firebase === 'undefined') {
                console.log('Firebase SDK not loaded, checking HTML scripts...');

                // Check if Firebase scripts are already in the HTML
                const firebaseScripts = document.querySelectorAll('script[src*="firebasejs"]');
                if (firebaseScripts.length > 0) {
                    console.log('Firebase scripts found in HTML, waiting for them to load...');
                    // Wait for scripts to load
                    await this.waitForFirebaseScripts();
                } else {
                    console.log('No Firebase scripts in HTML, attempting to load dynamically...');
                    // Try to load Firebase SDK dynamically
                    await this.loadFirebaseSDK();
                }
            }

            // Double-check Firebase is available
            if (typeof firebase === 'undefined') {
                console.log('Firebase SDK still not available, checking for alternative loading...');
                // Wait a bit more and check again
                await new Promise(resolve => setTimeout(resolve, 1000));

                if (typeof firebase === 'undefined') {
                    throw new Error('Firebase SDK failed to load after multiple attempts');
                }
            }

            console.log('Firebase SDK detected, initializing...');

            // Wait a bit more to ensure Firebase is fully loaded
            await new Promise(resolve => setTimeout(resolve, 500));

            // Initialize Firebase
            if (!firebase.apps.length) {
                firebase.initializeApp(this.firebaseConfig);
                console.log('Firebase app initialized');
            }

            // Initialize Firestore
            this.db = firebase.firestore();
            this.auth = firebase.auth();

            this.isFirebaseInitialized = true;
            console.log('Firebase initialized successfully');

            // Load existing messages from Firestore
            await this.loadMessagesFromFirebase();

        } catch (error) {
            console.error('Firebase initialization error:', error);
            this.isFirebaseInitialized = false;
            // Fallback to mock data
            this.loadMockMessages();
        }
    }

    /**
     * Wait for Firebase scripts to load from HTML
     */
    async waitForFirebaseScripts() {
        return new Promise((resolve) => {
            let attempts = 0;
            const maxAttempts = 50; // 5 seconds max wait

            const checkFirebase = () => {
                attempts++;
                if (typeof firebase !== 'undefined') {
                    console.log('Firebase SDK detected after waiting');
                    resolve();
                } else if (attempts < maxAttempts) {
                    setTimeout(checkFirebase, 100);
                } else {
                    console.log('Firebase SDK not detected after waiting, will try dynamic loading');
                    resolve();
                }
            };

            checkFirebase();
        });
    }

    /**
     * Load Firebase SDK dynamically
     */
    async loadFirebaseSDK() {
        return new Promise((resolve, reject) => {
            console.log('Loading Firebase SDK dynamically...');

            // Try multiple Firebase SDK versions
            const firebaseVersions = [
                'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js',
                'https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js',
                'https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js'
            ];

            let currentVersion = 0;

            const tryLoadFirebase = () => {
                if (currentVersion >= firebaseVersions.length) {
                    reject(new Error('All Firebase SDK versions failed to load'));
                    return;
                }

                const appScript = document.createElement('script');
                appScript.src = firebaseVersions[currentVersion];
                appScript.onload = () => {
                    console.log(`Firebase App ${firebaseVersions[currentVersion]} loaded successfully`);
                    // Load Firestore
                    this.loadFirestore(currentVersion, resolve, reject);
                };
                appScript.onerror = () => {
                    console.log(`Firebase App ${firebaseVersions[currentVersion]} failed, trying next version...`);
                    currentVersion++;
                    tryLoadFirebase();
                };
                document.head.appendChild(appScript);
            };

            tryLoadFirebase();
        });
    }

    /**
     * Load Firestore after Firebase App is loaded
     */
    loadFirestore(versionIndex, resolve, reject) {
        const firestoreVersions = [
            'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js',
            'https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js',
            'https://www.gstatic.com/firebasejs/7.24.0/firebase-firestore.js'
        ];

        const firestoreScript = document.createElement('script');
        firestoreScript.src = firestoreVersions[versionIndex];
        firestoreScript.onload = () => {
            console.log(`Firestore ${firestoreVersions[versionIndex]} loaded successfully`);
            // Load Auth (optional)
            this.loadAuth(versionIndex, resolve, reject);
        };
        firestoreScript.onerror = () => {
            console.log(`Firestore ${firestoreVersions[versionIndex]} failed, but continuing...`);
            // Continue even if auth fails
            this.loadAuth(versionIndex, resolve, reject);
        };
        document.head.appendChild(firestoreScript);
    }

    /**
     * Load Auth after Firestore is loaded
     */
    loadAuth(versionIndex, resolve, reject) {
        const authVersions = [
            'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js',
            'https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js',
            'https://www.gstatic.com/firebasejs/7.24.0/firebase-auth.js'
        ];

        const authScript = document.createElement('script');
        authScript.src = authVersions[versionIndex];
        authScript.onload = () => {
            console.log(`Firebase Auth ${authVersions[versionIndex]} loaded successfully`);
            resolve();
        };
        authScript.onerror = () => {
            console.log(`Firebase Auth ${authVersions[versionIndex]} failed, but continuing...`);
            resolve(); // Continue even if auth fails
        };
        document.head.appendChild(authScript);
    }

    /**
     * Bind event listeners
     */
    bindEvents() {
        const rsvpForm = document.getElementById('rsvp-form');
        if (rsvpForm) {
            rsvpForm.addEventListener('submit', this.handleRSVPSubmit.bind(this));
        }
    }

    /**
     * Handle RSVP form submission
     */
    async handleRSVPSubmit(event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value.trim(),
            message: document.getElementById('message').value.trim(),
            attendance: document.getElementById('attendance').value,
            timestamp: new Date().toISOString(),
            id: this.generateId()
        };

        // Validate form data
        if (!this.validateFormData(formData)) {
            return;
        }

        try {
            // Show loading state
            this.showLoadingState(true);

            if (this.isFirebaseInitialized && this.db) {
                // Submit to Firebase
                await this.submitToFirebase(formData);
            } else {
                // Fallback to mock submission
                await this.submitMock(formData);
            }

            // Success handling
            this.handleSubmissionSuccess(formData);

        } catch (error) {
            console.error('RSVP submission error:', error);
            this.showError('Terjadi kesalahan saat mengirim RSVP. Silakan coba lagi.');
        } finally {
            this.showLoadingState(false);
        }
    }

    /**
     * Validate form data
     */
    validateFormData(data) {
        if (!data.name) {
            this.showError('Nama harus diisi');
            return false;
        }
        if (!data.message) {
            this.showError('Pesan harus diisi');
            return false;
        }
        if (!data.attendance) {
            this.showError('Silakan pilih kehadiran');
            return false;
        }
        return true;
    }

    /**
     * Submit to Firebase Firestore
     */
    async submitToFirebase(data) {
        try {
            // Add to rsvp_responses collection
            await this.db.collection('rsvp_responses').add({
                name: data.name,
                message: data.message,
                attendance: data.attendance,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                created_at: new Date()
            });

            // Add to sweet_messages collection
            await this.db.collection('sweet_messages').add({
                name: data.name,
                message: data.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                created_at: new Date()
            });

            console.log('Data submitted to Firebase successfully:', data);

        } catch (error) {
            console.error('Firebase submission error:', error);
            throw new Error('Failed to submit to Firebase: ' + error.message);
        }
    }

    /**
     * Mock submission for development fallback
     */
    async submitMock(data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Mock submission (Firebase not available):', data);
                resolve();
            }, 1000);
        });
    }

    /**
     * Handle successful submission
     */
    handleSubmissionSuccess(data) {
        // Add to local messages array
        this.messages.unshift(data);

        // Reload messages display
        this.loadSweetMessages();

        // Reset form
        document.getElementById('rsvp-form').reset();

        // Show success message
        this.showSuccess('Terima kasih atas RSVP Anda! Pesan telah berhasil dikirim dan disimpan.');
    }

    /**
     * Load sweet messages from Firebase or fallback
     */
    async loadSweetMessages() {
        const messagesContainer = document.getElementById('sweet-messages');
        if (!messagesContainer) return;

        try {
            if (this.isFirebaseInitialized && this.db) {
                // Load from Firebase
                await this.loadMessagesFromFirebase();
            } else {
                // Fallback to mock data
                this.loadMockMessages();
            }
        } catch (error) {
            console.error('Error loading messages:', error);
            // Fallback to mock data
            this.loadMockMessages();
        }
    }

    /**
     * Load messages from Firebase Firestore
     */
    async loadMessagesFromFirebase() {
        try {
            const snapshot = await this.db.collection('sweet_messages')
                .orderBy('timestamp', 'desc')
                .limit(20)
                .get();

            this.messages = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                this.messages.push({
                    id: doc.id,
                    name: data.name,
                    message: data.message,
                    timestamp: data.timestamp ? data.timestamp.toDate().toISOString() : data.created_at,
                    date: data.created_at ? data.created_at.toDate().toISOString().split('T')[0] : null
                });
            });

            this.displayMessages();
            console.log('Messages loaded from Firebase:', this.messages.length);

        } catch (error) {
            console.error('Error loading messages from Firebase:', error);
            // Fallback to mock data
            this.loadMockMessages();
        }
    }

    /**
     * Load mock messages as fallback
     */
    loadMockMessages() {
        this.messages = this.getMockMessages();
        this.displayMessages();
        console.log('Using mock messages (Firebase not available)');
    }

    /**
     * Display messages in the UI
     */
    displayMessages() {
        const messagesContainer = document.getElementById('sweet-messages');
        if (!messagesContainer) return;

        messagesContainer.innerHTML = '';

        this.messages.forEach((msg, index) => {
            const messageDiv = this.createMessageElement(msg, index);
            messagesContainer.appendChild(messageDiv);
        });
    }

    /**
     * Create message element
     */
    createMessageElement(msg, index) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'box-testimony animate-box fadeInUp animated';
        messageDiv.style.padding = '15px';

        const formattedDate = this.formatDate(msg.timestamp || msg.date);

        messageDiv.innerHTML = `
            <blockquote>
                <span class="quote"><span><i class="fa fa-quote-left"></i></span></span>
                <p>"${msg.message}"</p>
                <span class="date">${formattedDate}</span>
            </blockquote>
            <p class="author">${msg.name}</p> 
        `;

        return messageDiv;
    }

    /**
     * Get mock messages for development
     */
    getMockMessages() {
        return [
            {
                name: "Dzaki",
                message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Doa kami menyertai kalian selalu.",
                date: "2025-09-15",
            },
            {
                name: "Alula & Family",
                message: "Selamat onti Lia & om Septi",
                date: "2025-09-14",
            },
        ];
    }

    /**
     * Format date for display
     */
    formatDate(dateString) {
        if (!dateString) return '';

        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch (error) {
            return dateString;
        }
    }

    /**
     * Generate unique ID
     */
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    /**
     * Show loading state
     */
    showLoadingState(show) {
        const submitBtn = document.querySelector('#rsvp-form button[type="submit"]');
        if (submitBtn) {
            if (show) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Mengirim...';
            } else {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Kirim';
            }
        }
    }

    /**
     * Show success message
     */
    showSuccess(message) {
        this.showNotification(message, 'success');
    }

    /**
     * Show error message
     */
    showError(message) {
        this.showNotification(message, 'error');
    }

    /**
     * Show notification
     */
    showNotification(message, type) {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.rsvp-notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `rsvp-notification rsvp-notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fa fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : '#f44336'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 10000;
            max-width: 400px;
            animation: slideInRight 0.3s ease-out;
        `;

        // Add animation styles
        if (!document.querySelector('#rsvp-notification-styles')) {
            const style = document.createElement('style');
            style.id = 'rsvp-notification-styles';
            style.textContent = `
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .rsvp-notification .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .rsvp-notification .fa {
                    font-size: 18px;
                }
            `;
            document.head.appendChild(style);
        }

        // Add to page
        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideInRight 0.3s ease-out reverse';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
    }

    /**
     * Get Firebase configuration from environment or fallback
     */
    getFirebaseConfig() {
        // Try to get from environment config first
        if (window.getFirebaseConfig && typeof window.getFirebaseConfig === 'function') {
            const envConfig = window.getFirebaseConfig();
            if (envConfig && envConfig.apiKey && envConfig.apiKey !== 'YOUR_DEV_API_KEY') {
                return envConfig;
            }
        }

        // Try to get from global Firebase config
        if (window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.apiKey && window.FIREBASE_CONFIG.apiKey !== 'YOUR_API_KEY') {
            return window.FIREBASE_CONFIG;
        }

        // Fallback to default config
        return {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_STORAGE_BUCKET",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };
    }

    /**
     * Update Firebase configuration
     */
    updateFirebaseConfig(config) {
        this.firebaseConfig = { ...this.firebaseConfig, ...config };
        this.initializeFirebase();
    }

    /**
     * Test Firebase connection
     */
    async testFirebaseConnection() {
        try {
            if (!this.db) {
                throw new Error('Firestore database not initialized');
            }

            // Try to read from a test collection
            const testDoc = await this.db.collection('_test_connection').doc('test').get();
            console.log('Firebase connection test successful');
            return true;

        } catch (error) {
            console.error('Firebase connection test failed:', error);
            return false;
        }
    }

    /**
     * Debug Firebase loading status
     */
    debugFirebaseLoading() {
        console.log('=== Firebase Loading Debug ===');
        console.log('Firebase global:', typeof firebase);
        console.log('Firebase scripts in HTML:', document.querySelectorAll('script[src*="firebasejs"]').length);

        const firebaseScripts = document.querySelectorAll('script[src*="firebasejs"]');
        firebaseScripts.forEach((script, index) => {
            console.log(`Script ${index + 1}:`, script.src, 'Loaded:', script.complete);
        });

        console.log('Window firebase object:', window.firebase);
        console.log('================================');
    }

    /**
     * Get Firebase status
     */
    getFirebaseStatus() {
        return {
            initialized: this.isFirebaseInitialized,
            db: !!this.db,
            auth: !!this.auth,
            config: this.firebaseConfig,
            firebaseAvailable: typeof firebase !== 'undefined',
            firebaseScripts: document.querySelectorAll('script[src*="firebasejs"]').length
        };
    }
}

// Initialize RSVP Manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    window.rsvpManager = new RSVPManager();
});

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RSVPManager;
}
