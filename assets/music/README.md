# Music Directory

This directory is for storing background music files for the wedding website.

## Supported Formats

- MP3 (recommended)
- WAV
- OGG

## How to Add Music Files

1. Place your music files in this directory
2. Name your main background music file as `background-music.mp3` (or .ogg/.wav)
3. The floating music player will automatically detect and play the background music

## Required Files for Floating Music Player

The floating music player is looking for these files (in order of preference):

- `background-music.mp3` (recommended)
- `background-music.ogg`
- `background-music.wav`

## Example File Structure

```
assets/music/
├── background-music.mp3    # Main background music (required)
├── background-music.ogg    # Alternative format
├── background-music.wav    # Alternative format
└── README.md              # This file
```

## Floating Music Player Features

- **Automatic Play**: Music plays automatically when page loads (if browser allows)
- **Floating Button**: Circular button in bottom-right corner with 0.5 opacity
- **Hover Effect**: Opacity increases to 1 on hover
- **Play/Pause Toggle**: Click to toggle music play/pause
- **Visual Feedback**: Button pulses and icon rotates when playing
- **Responsive**: Adapts to different screen sizes
- **Error Handling**: Hides player if audio file is missing

## File Naming Convention

- Use lowercase letters
- Replace spaces with hyphens
- Keep file names descriptive but short
- Example: `wedding-march.mp3`, `romantic-melody.mp3`

## Notes

- The music player will automatically loop the current track
- Volume control is available in the floating player
- The player will show "Error loading audio" if files are missing
- Modern browsers may block autoplay - user interaction is required to start music
- The player will pause when the page is hidden (tab switch)
