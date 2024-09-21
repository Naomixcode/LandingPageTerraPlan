// Selecciona el elemento donde se va a escribir el texto "¡BIENVENIDOS!"
const typewriterText = document.getElementById('typewriter-text');
const text = '¡Bienvenidos!';
let index = 10;
let isAdding = true;

function playTypewriter() {
    setTimeout(function () {
        typewriterText.innerText = text.slice(0, index);
        if (isAdding) {
            if (index > text.length) {
                // Comienza a borrar después de una pausa
                isAdding = false;
                setTimeout(playTypewriter, 2000);
            } else {
                index++;
                playTypewriter();
            }
        } else {
            if (index === 0) {
                // Comienza a añadir texto nuevamente después de una pausa
                isAdding = true;
                setTimeout(playTypewriter, 2000);
            } else {
                index--;
                playTypewriter();
            }
        }
    }, isAdding ? 120 : 60); // Velocidad de añadir es 120 ms y de borrar es 60 ms
}

// Inicia la animación
playTypewriter();
