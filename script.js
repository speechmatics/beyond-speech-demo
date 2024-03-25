document.addEventListener('DOMContentLoaded', function() {
    const mediaSelector = document.getElementById('mediaSelector');
    const videoPlayer = document.getElementById('videoPlayer');
    const subtitleTrack = document.getElementById('subtitleTrack');

    const mediaList = [
        { title: 'Rob Becketts APOLLO', file: 'media/RobBeckettsAPOLLO.mp4' },
        { title: 'Big Bang', file: 'media/BigBang.mp4' },
        // Add more files as needed
    ];

    // Populate the dropdown and load the first video
    mediaList.forEach((media, index) => {
        const option = new Option(media.title, media.file, index === 0, index === 0);
        mediaSelector.add(option);
    });

    // Function to change video source and load subtitle
    function changeMedia(selectedMedia) {
        videoPlayer.src = selectedMedia.file;
        const subtitleFile = selectedMedia.file.replace('.mp4', '.vtt');
        subtitleTrack.src = subtitleFile; // Attempt to load subtitle
        videoPlayer.load();
    }

    // Load the first video by default
    if (mediaList.length > 0) {
        changeMedia(mediaList[0]);
    }

    // Handle selection changes
    mediaSelector.addEventListener('change', function() {
        const selectedMedia = mediaList[this.value];
        changeMedia(selectedMedia);
    });
});
