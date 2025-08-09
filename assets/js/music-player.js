// Background Music Player
class BackgroundMusicPlayer {
    constructor() {
        this.audio = null;
        this.isPlaying = false;
        this.volume = 0.5;
        this.currentTrack = 0;
        this.playlist = [];
        this.init();
    }

    init() {
        this.createMusicPlayer();
        this.setupEventListeners();
        this.loadPlaylist();
    }

    createMusicPlayer() {
        const musicPlayerHTML = `
            <div class="music-player" id="musicPlayer">
                <div class="music-controls">
                    <button class="play-pause-btn" id="playPauseBtn">
                        <i class="icon-play" id="playIcon"></i>
                    </button>
                    <div class="music-info">
                        <p class="music-title" id="musicTitle">Wedding Music</p>
                        <p class="music-status" id="musicStatus">Ready to play</p>
                    </div>
                    <div class="volume-control">
                        <i class="icon-volume-up volume-icon" id="volumeIcon"></i>
                        <input type="range" class="volume-slider" id="volumeSlider" min="0" max="100" value="50">
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', musicPlayerHTML);
    }

    setupEventListeners() {
        const playPauseBtn = document.getElementById('playPauseBtn');
        const volumeSlider = document.getElementById('volumeSlider');
        const volumeIcon = document.getElementById('volumeIcon');
        const musicPlayer = document.getElementById('musicPlayer');

        // Music player container click to expand/collapse
        musicPlayer.addEventListener('click', (e) => {
            // Don't trigger if clicking on controls
            if (!e.target.closest('.music-controls')) {
                musicPlayer.classList.toggle('expanded');
            }
        });

        // Play/Pause button
        playPauseBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent container click
            this.togglePlayPause();
        });

        // Volume control
        volumeSlider.addEventListener('input', (e) => {
            this.setVolume(e.target.value / 100);
        });

        // Volume icon click to mute/unmute
        volumeIcon.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent container click
            this.toggleMute();
        });

        // Auto-play when user interacts with the page
        document.addEventListener('click', () => {
            if (!this.isPlaying && this.audio) {
                this.play();
            }
        }, { once: true });

        // Handle audio events
        this.setupAudioEvents();
    }

    setupAudioEvents() {
        if (this.audio) {
            this.audio.addEventListener('ended', () => {
                this.playNext();
            });

            this.audio.addEventListener('timeupdate', () => {
                this.updateStatus();
            });

            this.audio.addEventListener('error', (e) => {
                console.error('Audio error:', e);
                this.updateStatus('Error loading audio');
            });
        }
    }

    loadPlaylist() {
        // Default playlist - you can add more tracks here
        // Update this array with your actual music files
        this.playlist = [
            {
                title: 'Wedding March',
                file: 'assets/music/wedding-march.mp3'
            },
            {
                title: 'Romantic Melody',
                file: 'assets/music/romantic-melody.mp3'
            },
            {
                title: 'Love Song',
                file: 'assets/music/love-song.mp3'
            }
        ];

        // Check if any music files exist
        this.checkMusicFiles();
    }

    checkMusicFiles() {
        // For now, we'll load the first track and handle errors gracefully
        if (this.playlist.length > 0) {
            this.loadAudio();
        } else {
            this.updateStatus('No music files available');
            this.updateTitle('Add music files to assets/music/');
        }
    }

    loadAudio() {
        if (this.playlist.length === 0) {
            this.updateStatus('No music available');
            this.updateTitle('Add music files');
            return;
        }

        const track = this.playlist[this.currentTrack];
        this.audio = new Audio(track.file);
        this.audio.volume = this.volume;
        this.audio.loop = true; // Loop the current track

        this.setupAudioEvents();
        this.updateTitle(track.title);
        this.updateStatus('Ready to play');

        // Handle loading errors
        this.audio.addEventListener('error', (e) => {
            console.error('Audio loading error:', e);
            this.updateStatus('Music file not found');
            this.updateTitle('Add music to assets/music/');
        });
    }

    togglePlayPause() {
        if (!this.audio) {
            this.loadAudio();
        }

        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        if (!this.audio) {
            this.loadAudio();
        }

        this.audio.play().then(() => {
            this.isPlaying = true;
            this.updatePlayPauseButton();
            this.updateStatus('Playing');
            const musicPlayer = document.getElementById('musicPlayer');
            musicPlayer.classList.add('playing');
            // Auto-expand when music starts playing
            musicPlayer.classList.add('expanded');
        }).catch(error => {
            console.error('Error playing audio:', error);
            this.updateStatus('Error playing audio');
        });
    }

    pause() {
        if (this.audio) {
            this.audio.pause();
            this.isPlaying = false;
            this.updatePlayPauseButton();
            this.updateStatus('Paused');
            const musicPlayer = document.getElementById('musicPlayer');
            musicPlayer.classList.remove('playing');
            // Auto-collapse after a delay when paused
            setTimeout(() => {
                if (!this.isPlaying) {
                    musicPlayer.classList.remove('expanded');
                }
            }, 3000);
        }
    }

    playNext() {
        this.currentTrack = (this.currentTrack + 1) % this.playlist.length;
        this.loadAudio();
        if (this.isPlaying) {
            this.play();
        }
    }

    playPrevious() {
        this.currentTrack = (this.currentTrack - 1 + this.playlist.length) % this.playlist.length;
        this.loadAudio();
        if (this.isPlaying) {
            this.play();
        }
    }

    setVolume(volume) {
        this.volume = volume;
        if (this.audio) {
            this.audio.volume = volume;
        }
        this.updateVolumeIcon();
    }

    toggleMute() {
        const volumeSlider = document.getElementById('volumeSlider');
        if (this.volume > 0) {
            this.lastVolume = this.volume;
            this.setVolume(0);
            volumeSlider.value = 0;
        } else {
            this.setVolume(this.lastVolume || 0.5);
            volumeSlider.value = (this.lastVolume || 0.5) * 100;
        }
    }

    updatePlayPauseButton() {
        const playIcon = document.getElementById('playIcon');
        if (this.isPlaying) {
            playIcon.className = 'icon-pause';
        } else {
            playIcon.className = 'icon-play';
        }
    }

    updateTitle(title) {
        document.getElementById('musicTitle').textContent = title;
    }

    updateStatus(status) {
        document.getElementById('musicStatus').textContent = status;
    }

    updateVolumeIcon() {
        const volumeIcon = document.getElementById('volumeIcon');
        if (this.volume === 0) {
            volumeIcon.className = 'icon-volume-off volume-icon';
        } else if (this.volume < 0.5) {
            volumeIcon.className = 'icon-volume-down volume-icon';
        } else {
            volumeIcon.className = 'icon-volume-up volume-icon';
        }
    }

    // Public method to add custom tracks
    addTrack(title, file) {
        this.playlist.push({ title, file });
        if (!this.audio) {
            this.loadAudio();
        }
    }

    // Public method to set custom playlist
    setPlaylist(playlist) {
        this.playlist = playlist;
        this.currentTrack = 0;
        this.loadAudio();
    }

    // Public method to update playlist with new music files
    updatePlaylistWithFiles(fileList) {
        this.playlist = fileList.map(file => ({
            title: this.getTitleFromFileName(file),
            file: `assets/music/${file}`
        }));
        this.currentTrack = 0;
        this.loadAudio();
    }

    // Helper method to extract title from filename
    getTitleFromFileName(filename) {
        return filename
            .replace(/\.(mp3|wav|ogg)$/i, '')
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
    }
}

// Initialize music player when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.backgroundMusicPlayer = new BackgroundMusicPlayer();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BackgroundMusicPlayer;
}
