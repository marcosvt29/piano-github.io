document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        let note = this.getAttribute('data-note');
        let audio = document.getElementById(`audio${note}`);
        if (audio) {
            audio.currentTime = 0; // Reinicia o áudio, se já estiver tocando
            audio.play();
        }
    });
});
