function playAudio(audioId) {
    let audio = document.getElementById(audioId);

    // Stop any other playing audio before starting new one
    document.querySelectorAll("audio").forEach(a => {
        if (a !== audio) {
            a.pause();
            a.currentTime = 0; // Reset to start
        }
    });

    // If audio is already playing, stop it. Otherwise, play it.
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0; // Reset if user stops it
    }
}