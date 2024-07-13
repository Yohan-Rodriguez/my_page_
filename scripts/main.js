/*
    Selección de elementos HTML
*/
const list = document.querySelector(".list");
const item = document.querySelector(".item");
const itemWidth = item.offsetWidth;     // Ancho del primer elemento con la clase .item.


// document.addEventListener('DOMContentLoaded', function() {
//     checkCarouselButtons('biList');
//     checkCarouselButtons('statsList');
//     checkCarouselButtons('dbList');
//     checkCarouselButtons('analyticsList');
//     checkCarouselButtons('scienceList');
//     checkCarouselButtons('cloudList');  
// });

const perfilTextos = document.querySelectorAll('.perfil-texto p');
let index = 0;
const velocidadEscritura = 30; // Velocidad de escritura en milisegundos (menos es más rápido)

function escribirTexto() {
    if (index < perfilTextos.length) {
        const textoCompleto = perfilTextos[index].innerHTML.trim();
        perfilTextos[index].innerHTML = ''; // Limpiar el contenido original del párrafo

        let letraIndex = 0;

        function escribirLetra() {
            perfilTextos[index].innerHTML += textoCompleto[letraIndex];
            letraIndex++;
            if (letraIndex < textoCompleto.length) {
                setTimeout(escribirLetra, velocidadEscritura);
            } else {
                index++;
                setTimeout(escribirTexto, 1000); // Tiempo de espera entre párrafos
            }
        }    
        escribirLetra();
    }
}    
escribirTexto();


/*
    BOTONES "PREVIOUS" Y "NEXT"
*/
document.querySelectorAll('.certificacion-carrusel').forEach(wrapper => {
    const list = wrapper.querySelector(".list");
    const items = wrapper.querySelectorAll(".item");
    const itemWidth = items[0].offsetWidth;

    function handleClick(direction) {
        if (direction === "previous") {
            list.scrollBy({ left: -itemWidth, behavior: "smooth" });
        } else {
            const maxScrollLeft = list.scrollWidth - list.clientWidth;
            // Reiniciar el carrusel en la primera imagen
            if (list.scrollLeft + itemWidth - itemWidth/2 > maxScrollLeft) {
                // Reiniciar al principio
                list.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                list.scrollBy({ left: itemWidth, behavior: "smooth" });
            }
        }
    }

    wrapper.querySelector(".button--previous").addEventListener("click", function() {
        handleClick('previous');
    });

    wrapper.querySelector(".button--next").addEventListener("click", function() {
        handleClick('next');
    });
});


/*
    BOTONES "PREVIOUS" Y "NEXT" DEL CAROUSEL
*/

document.querySelectorAll('#carousel').forEach(wrapper => {
    const list = wrapper.querySelectorAll('.item');
    const items = Array.from(list);
    const itemWidth = items[0].offsetWidth;
    let startX, endX;

    function handleClick(direction) {
        const checkedInput = document.querySelector('input[name="position"]:checked');
        const currentIndex = Array.from(checkedInput.parentNode.children).indexOf(checkedInput);

        if (direction === "previous") {
            if (currentIndex > 0) {
                checkedInput.previousElementSibling.checked = true;
            }
        } else {
            if (currentIndex < items.length - 1) {
                checkedInput.nextElementSibling.checked = true;
            }
        }
    }

    wrapper.querySelector(".button--previous").addEventListener("click", function() {
        handleClick('previous');
    });

    wrapper.querySelector(".button--next").addEventListener("click", function() {
        handleClick('next');
    });

    wrapper.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    wrapper.addEventListener('touchmove', function(e) {
        endX = e.touches[0].clientX;
    });

    wrapper.addEventListener('touchend', function(e) {
        if (startX > endX + 50) {
            handleClick('next');
        } else if (startX < endX - 50) {
            handleClick('previous');
        }
    });
});



/*
    CARGAR INFORAMACIÓN DE LAS VENTANAS MODAL DE #PROYECTOS
*/
const wrapper = document.querySelector('#carousel'); // Selecciona el contenedor principal
const list_carousel = wrapper.querySelectorAll('.item');
const items = Array.from(list_carousel);
let startX, endX;

function handleClick(direction) {
    const checkedInput = document.querySelector('input[name="position"]:checked');
    const currentIndex = Array.from(checkedInput.parentNode.children).indexOf(checkedInput);

    if (direction === "previous" && currentIndex > 0) {
        checkedInput.previousElementSibling.checked = true;
    } else if (direction === "next" && currentIndex < items.length - 1) {
        checkedInput.nextElementSibling.checked = true;
    }

    updateModalContent();
}

function updateModalContent() {
    const checkedInput = document.querySelector('input[name="position"]:checked');
    const index = Array.from(checkedInput.parentNode.children).indexOf(checkedInput);
    const modalContent = [
        "Contenido para el proyecto 1",
        "Contenido para el proyecto 2",
        "Contenido para el proyecto 3",
        "Contenido para el proyecto 4",
        "Contenido para el proyecto 5",
        "Contenido para el proyecto 6",
        "Contenido para el proyecto 7"
    ];

    document.getElementById('modal-content').textContent = modalContent[index];
}

wrapper.querySelector(".button--previous").addEventListener("click", function() {
    handleClick('previous');
});

wrapper.querySelector(".button--next").addEventListener("click", function() {
    handleClick('next');
});

// Cambiar la selección aquí si el botón está fuera de #carousel
document.querySelector(".boton").addEventListener("click", function() {
    updateModalContent();
});

wrapper.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
});

wrapper.addEventListener('touchmove', function(e) {
    endX = e.touches[0].clientX;
});




/*
    AUMENTAR TAMAÑO DE LAS IMAGENES DE LAS CERTIFICACIONES
*/
document.addEventListener('DOMContentLoaded', function() {
    const zoomableImages = document.querySelectorAll('.zoomable-image');

    zoomableImages.forEach(image => {
        image.addEventListener('click', function() {
            image.classList.toggle('zoomed');

            // Después de 6 segundos, quitar la clase zoomed
            setTimeout(function() {
                image.classList.remove('zoomed');
            }, 5000);
        });
    });
});

  