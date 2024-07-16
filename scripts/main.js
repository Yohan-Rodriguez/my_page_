 /*
    Mensaje para navegación horizontal en smartphones
*/
    function checkOrientation() {
        const rotateMessage = document.querySelector('.rotate-message');
        if (window.innerHeight > window.innerWidth) {
            rotateMessage.style.display = 'block';  // Mostrar el mensaje en modo vertical
        } else {
            rotateMessage.style.display = 'none';  // Ocultar el mensaje en modo horizontal
        }
    }

    // Escuchar el cambio de orientación
    window.addEventListener('resize', checkOrientation);

    // Comprobar la orientación al cargar la página
    document.addEventListener('DOMContentLoaded', checkOrientation);


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




const modalContent = [
    `<h3>Aplicación de una red neuronal FNN en función del análisis de transformada rápida de Fourier en mapas de calor de la liga de fútbol colombiano.</h3>
    <br><p><strong>Descripción:</strong> El objetivo fue desarrollar un modelo de predicción de los resultados de los partidos de fútbol colombiano 2024-1 utilizando <strong>redes neuronales</strong> y técnicas de <strong>webscraping</strong>. Se entrenó una red neuronal artificial de tipo feedforward (FNN) para la clasificación de los resultados de los partidos de fútbol con la información discretizada de los mapas de calor a los que se les aplicó <strong>procesamiento de imágenes</strong> por medio de la transformada rápida de Fourier (FFT).</p>
    <br><p><strong>Pasos destacados para el desarrollo del proyecto:</strong></p><ul style="padding: 0.5rem 3rem;"><li>Webscraping para recop0.3lar los datos (estadísticas y 380 mapas de calor) de 190 partidos de la fase todos contra todos.</li><li>Aplicar la transformad0.3 Rápida de Fourier <strong>(FFT)</strong> usando <strong>Matlab</strong>, para el procesamiento de imágenes.</li><li>Python para el análisi0.3 los datos.</li><li>Entrenar la red neuron0.3l FNN.</li><li>Obtener las prediccion0.3s de los resultados en los cuadrangulares del fútbol colombiano 2024-1.</li></ul>
    <br><p><strong>Tecnologías utilizadas:</strong> Matlab, Python, Selenium, Httprequest, BeautifulSoup4, pandas, numpy y Keras.</p>
    <br><button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9);
    color: white;" onclick="window.open('https://prezi.com/view/rL0eyvxpNMdfZAjfkL6K/', '_blank')">Ir a los resultados</button>`,
    
    `<h3>OpenAI para Visualización y Manipulación de Datos Geoespaciales</h3>
    <p>Desarrollo de una API que permite la interacción con datos geoespaciales y su análisis mediante herramientas de visualización. Utilizando tecnologías como <strong>GeoPandas</strong> y <strong>Streamlit</strong>, la API proporciona funcionalidades para manipular, visualizar y analizar conjuntos de datos espaciales.<br><br>Los usuarios pueden realizar consultas, generar gráficos interactivos y obtener resultados en tiempo real, lo que facilita la toma de decisiones informadas en proyectos de análisis geoespacial.</p>
    <br><p><strong>Pasos destacados para el desarrollo del proyecto:</strong></p><ul style="padding: 0.5rem 3rem;"><li>Integrar la API de Ope0.3AI para consultas inteligentes y generación de texto.</li>    <li>Utilizar <strong>GeoPa0.3das</strong> para manejar y procesar datos geoespaciales.</li>    <li>Desarrollar endpoints 0.3ESTful con <strong>Flask</strong> para interactuar con los datos.</li>    <li>Crear visualizaciones 0.3nteractivas usando <strong>Streamlit</strong> para mostrar los resultados.</li>    <li>Implementar pruebas y 0.3ocumentación para asegurar la calidad y facilidad de uso de la API.</li></ul>
    <br><p><strong>Tecnologías utilizadas:</strong> OpenAI, GeoPandas, Streamlit, Flask, Python, Pandas, NumPy, Matplotlib y Shapely.</p>`,
    
    `<h3>Webscraping para la obtención de datos estadísticos de la NBA y la liga de fútbol colombiano 2024-1.</h3>
    <br><p><strong>Descripción:</strong> Se trabajó en dos proyectos. El primero consistió en la recolección de datos estadísticos de la NBA, desde la temporada 2021/22 hasta la temporada 2023/24, con el fin de almacenar la información en archivos <strong>.csv</strong>. El segundo proyecto se enfocó en la liga de fútbol colombiano 2024-1, donde se recopiló información estadística y los mapas de calor de todos los equipos en torno a los 190 partidos de la fase todos contra todos.</p>
    <br><p><strong>Pasos destacados para el desarrollo de los proyectos:</strong></p>
    <ul style="padding: 0.5rem 3rem;">
    <li>Web scraping para obte0.3er datos estadísticos de la NBA y almacenar en formato <strong>.csv</strong>.</li>
    <li>Extracción de informac0.3ón estadística y generación de 190 mapas de calor para la liga de fútbol colombiano.</li>
    <li>Uso de Python y biblio0.3ecas especializadas para el análisis y procesamiento de datos.</li>
    <li>Almacenamiento de imág0.3nes y datos en estructuras organizadas para facilitar su análisis posterior.</li>
    </ul>
    <br><p><strong>Tecnologías utilizadas:</strong> Python, Selenium, Httprequest, BeautifulSoup4, pandas, numpy y matplotlib.</p>`,
    // <br><button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9);
    // color: white;" >Webscraping - NBA</button>
    // <br><br><button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9);
    // color: white;" >Webscraping - liga colombiana</button>
    
    `<h3>Implementación de Codificación Huffman y Detección de Errores Hamming para la Transmisión de Datos.</h3>
    <br><p><strong>Descripción:</strong> El objetivo se basó en desarrollar un sistema que fusionara la codificación Huffman y la detección de errores por el método Hamming para la transmisión de datos en un canal ruidoso.<br>Se implementó el algoritmo de codificación Huffman para codificar cada una de las letras del abecedario castellano y llegar a comprimir los datos de forma eficiente. Posteriormente se calculó la codificación de una palabra o frase (sin límite de longitud de caracteres) ingresada por teclado y se simuló la generación de uno o más errores sobre los bits de la codificación Huffman de la palabra, para finalmente realizar la detección de errores (si los hubiera) en el mensaje por medio de Hamming y decodificar el mensaje corregido y completo al final la transmisión de los datos (el mensaje enviado).</p>
    <br><p><strong>Tecnologías utilizadas:</strong> Python, pandas, Numpy, Jupyter-notebook.</p>`,
    // <br><button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9);
    // color: white;" >Ir a los resultados</button>
    
    `<h3>Aplicación de algoritmos de aprendizaje automático</h3>    
    <br><p>🚧👨‍🔧🧱🚧</p>
    <ul style="margin-top: 2rem; list-style-type: none; padding: 0.5rem 3rem;"><li style="margin-bottom: 0.3rem;"><button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9);
    color: white;" >Logistic Regression</button></li><li style="margin-bottom: 0.3rem;"><button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9);
    color: white;" >KNN Neighborns</button></li><li style="margin-bottom: 0.3rem;"><button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9);
    color: white;" >Random Forest</button></li><li style="margin-bottom: 0.3rem;"><button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9);
    color: white;" >Linear Regression</button></li><li style="margin-bottom: 0.3rem;"><button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9);
    color: white;" >SVM (Support Vector Machine)</button></li></ul>
    <br><p>🚧👨‍🔧🧱🚧</p>`,
    
    `<h3>Dashboards en Tableau y Power BI</h3>
    <p>...</p>
    <br><p>🚧👨‍🔧🧱🚧</p>
    <br><button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9);
    color: white;" >Dashboards Tableau</button>
    <br><br><button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9);
    color: white;" >Dashboards Power BI</button>
    <br><p>🚧👨‍🔧🧱🚧</p>`,

    `<h3>Sscripts de Python</h3>    
    <br><p>Colección de scripts de Python diseñados con propositos generales para diferentes necesidades y tareas cotidianas en el contexto digital.</p>
    <br><p>🚧👨‍🔧🧱🚧</p>
    <br><ul style="list-style-type: none; padding: 0rem 2rem;">
    <li style="margin-bottom: 0.3rem;">
    <button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9); color: white;" >Calculadora de Derivadas</button>
    </li>
    <li style="margin-bottom: 0.3rem;">
    <button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9); color: white;" >Triángulo de Pascal - Serie de Fibonacci - Cálculo de Factorial</button>
    </li>       
    <li style="margin-bottom: 0.3rem;">
    <button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9); color: white;" >Conversión de PDF a Word</button>
    </li>
    <li style="margin-bottom: 0.3rem;">
    <button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9); color: white;" >Conversión de PDF a Audio</button>
    </li>
    <li style="margin-bottom: 0.3rem;">
    <button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9); color: white;" >Generador de Códigos QR para URLs</button>
    </li>
    <li style="margin-bottom: 0.3rem;">
    <button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9); color: white;" >Eliminar Fondo de Imagen</button>
    </li>
    <li style="margin-bottom: 0.3rem;">
    <button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9); color: white;" >Corrector de Texto</button>
    </li>
    <li style="margin-bottom: 0.3rem;">
    <button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9); color: white;" >Verificador de Hackeo de Redes WiFi</button>
    </li>
    <li style="margin-bottom: 0.3rem;">
    <button style="font-weight: bold; border: none; border-radius: 0.5rem; padding: 0.5rem 1rem; cursor: pointer;background-color: rgba(255, 0, 0, 0.9); color: white;" >Descarga de Videos de YouTube</button>
    </li>
    </ul>
    <br><p>🚧👨‍🔧🧱🚧</p>`
];

function updateModalContent() {
    const checkedInput = document.querySelector('input[name="position"]:checked');
    const index = Array.from(checkedInput.parentNode.children).indexOf(checkedInput);

    // Utiliza innerHTML para renderizar el contenido HTML
    document.getElementById('modal-content').innerHTML = modalContent[index];
}

document.querySelectorAll('#carousel').forEach(wrapper => {
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


});

// Cambiar la selección aquí si el botón está fuera de #carousel
document.querySelector(".boton").addEventListener("click", function() {
    updateModalContent();
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

  