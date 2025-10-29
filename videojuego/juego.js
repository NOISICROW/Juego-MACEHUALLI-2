// --- 🎵 MÚSICA ---
const musicaPrincipal = new Audio('musica/principal.mp3');
musicaPrincipal.loop = true;
musicaPrincipal.volume = 0.4;

const musicaSecundaria = new Audio('musica/secundario.mp3');
musicaSecundaria.volume = 0.6;

function iniciarMusica() {
    musicaPrincipal.play().catch(() => {
        console.log('🔇 El navegador bloqueó la reproducción automática. Se iniciará al hacer clic.');
    });

    // Cada 5 segundos, 30% de probabilidad de reproducir el sonido secundario
    setInterval(() => {
        if (Math.random() < 0.3) {
            musicaSecundaria.currentTime = 0;
            musicaSecundaria.play();
        }
    }, 5000);
}

// Esperar a la primera interacción del usuario
document.addEventListener('click', function initOnce() {
    iniciarMusica();
    document.removeEventListener('click', initOnce); // Solo una vez
});
