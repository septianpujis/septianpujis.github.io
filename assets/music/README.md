# Music Directory

This directory is for storing background music files for the wedding website.

## Supported Formats

- MP3 (recommended)
- WAV
- OGG

## How to Add Music Files

1. Place your music files in this directory
2. Update the playlist in `assets/js/music-player.js` to include your files
3. Make sure the file paths are correct

## Example Playlist Structure

```javascript
this.playlist = [
  {
    title: "Your Wedding Song",
    file: "assets/music/your-wedding-song.mp3",
  },
  {
    title: "Romantic Background",
    file: "assets/music/romantic-background.mp3",
  },
];
```

## File Naming Convention

- Use lowercase letters
- Replace spaces with hyphens
- Keep file names descriptive but short
- Example: `wedding-march.mp3`, `romantic-melody.mp3`

## Notes

- The music player will automatically loop the current track
- Volume control is available in the floating player
- The player will show "Error loading audio" if files are missing
