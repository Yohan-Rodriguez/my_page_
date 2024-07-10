
const perfilTexto = document.querySelector('.perfil-texto');
const textoCompleto = perfilTexto.innerHTML.trim();
perfilTexto.innerHTML = ''; // Limpiar el contenido original

let index = 0;
const velocidadEscritura = 50; // Velocidad de escritura en milisegundos (menos es más rápido)

function escribirTexto() {
    perfilTexto.innerHTML += textoCompleto[index];
    index++;
    if (index < textoCompleto.length) {
        setTimeout(escribirTexto, velocidadEscritura);
    }
}


