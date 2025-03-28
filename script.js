document.addEventListener('DOMContentLoaded', function() {
    const musicNotes = document.getElementById('musicNotes');
    const notes = ['♩', '♪', '♫', '♬', '🎵', '🎶'];
    const numberOfNotes = 20;
    
    for (let i = 0; i < numberOfNotes; i++) {
        const note = document.createElement('div');
        note.className = 'note';
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        
        // Posición aleatoria
        note.style.left = `${Math.random() * 100}%`;
        note.style.top = `${Math.random() * 100}%`;
        
        // Animación aleatoria
        note.style.animationDuration = `${5 + Math.random() * 10}s`;
        note.style.animationDelay = `${Math.random() * 5}s`;
        
        musicNotes.appendChild(note);
    }

    // Navegación suave
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});