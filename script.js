document.addEventListener('DOMContentLoaded', function() {
    const mediaSelector = document.getElementById('mediaSelector');
    const videoPlayer = document.getElementById('videoPlayer');
    const subtitleTrack = document.getElementById('subtitleTrack');

    const mediaList = [
        { title: 'Video 1', file: 'video1.mp4' },
        { title: 'Video 2', file: 'video2.mp4' },
        // Add more files as needed
    ];

    // Populate the dropdown
    mediaList.forEach((media, index) => {
        const option = new Option(media.title, index);
        mediaSelector.add(option);
    });

    // Change video source and load subtitle
    mediaSelector.addEventListener('change', function() {
        const selectedMedia = mediaList[this.value];
        videoPlayer.src = selectedMedia.file;
        const subtitleFile = selectedMedia.file.replace('.mp4', '.vtt');

        // Check if the subtitle file exists
        fetch(subtitleFile).then(response => {
            if (response.ok) {
                subtitleTrack.src = subtitleFile;
                videoPlayer.textTracks[0].mode = 'showing';
            } else {
                subtitleTrack.src = ''; // Clear subtitle if not found
            }
        }).catch(error => console.error('Error loading subtitle:', error));

        videoPlayer.load();
    });
});
