document.addEventListener('DOMContentLoaded', () => {
    const dynamicBlock = document.getElementById("dynamic-block");
    const contentArray = [
        `
            <p class="text-1">La rutina puede tener hasta 4 pasos.</p>
            <p class="text-2">
            En cada uno podrás escoger entre un <br> producto 
            <span class="hb-font estandar">Estándar</span>,
            uno <span class="hb-font premium">Premium</span> u <span class="hb-font omitir">Omitirlo</span>
            </p>
        `,
        `
            <p class="text-1">Apto para cualquier presupuesto.</p>
            <p class="text-2">
                <span class="hb-font">Lo anterior te permite escoger en que pasos invertir más y en cuales menos.</span>
            </p>
        `,
    ];

    let currentIndex = 0;

    function swapContent() {
        // Desvanecer el bloque actual
        dynamicBlock.classList.remove("visible");

        setTimeout(() => {
            // Cambiar contenido
            dynamicBlock.innerHTML = contentArray[currentIndex];
            currentIndex = (currentIndex + 1) % contentArray.length;

            // Desvanecer hacia adentro el nuevo contenido
            dynamicBlock.classList.add("visible");
        }, 1000); // Duración del fade-out (1 segundo)
    }

    dynamicBlock.innerHTML = contentArray[currentIndex];
    dynamicBlock.classList.add("visible");
    currentIndex++;

    // Repetir cada 6 segundos (5 segundos de contenido visible + 1 segundo de animación)
    setInterval(swapContent, 5000);

    // Seleccionamos el elemento de la imagen dentro del div

    // Lista (arreglo) de strings
    let imageArray = ["roche", "cerave", "bioaqua", "ordinary", "neutrogena", "vibrant", "eucerin"]; // Ajusta según las imágenes disponibles
    let currentImage = 0;  // Índice inicial
    let image = document.querySelector(".overlay-2 img"); // La única imagen mostrada
    let timeoutDuration = 4000;  // Duración del intervalo para cambiar de imagen

    // Inicializar la imagen
    image.src = `assets/marcas/${imageArray[currentImage]}.webp`;
    image.classList.add("visible"); // Asegurarse de que la primera imagen es visible

    // Función que cambia las imágenes con un fade out antes de hacer el fade in
    function changeImage() {
        // Hacer fade out de la imagen actual
        image.classList.remove("visible");

        // Esperar a que termine el fade out antes de cambiar la fuente de la imagen
        setTimeout(() => {
            // Cambiar la fuente de la imagen (es decir, la imagen misma)
            currentImage = (currentImage + 1) % imageArray.length; // Ciclo a través de las imágenes

            // Actualizar el src de la imagen
            image.src = `assets/marcas/${imageArray[currentImage]}.webp`;

            // Hacer fade in de la nueva imagen
            setTimeout(() => {
                image.classList.add("visible");
            }, 50); // Le damos un pequeño retraso para asegurarnos de que la fuente cambió antes del fade in
        }, 1000); // El tiempo del fade out (1 segundo), que coincide con la transición de opacidad
    }

    // Cambiar la imagen cada 4 segundos
    setInterval(changeImage, timeoutDuration);

    // Verificar si 'actualKit' en localStorage tiene más de un elemento
    const actualKit = JSON.parse(localStorage.getItem('actualKit')) || [];

    if (actualKit.length > 1) {
        window.location.href = '../formulario.html'; // Redirigir a formulario.html
        return; // Detener ejecución del resto del código si redirige
    }

    const sections = document.querySelectorAll('section');
    const buttons = document.querySelectorAll('.scrollButton');
    const endButton = document.getElementById('endButton');
    let casoParticular = [['0'], ['0'], ['0']]; // Mantener tres elementos en el arreglo


    let overlay = document.querySelector('.overlay');
    let startTouch;
    let isSliding = false;
    let botonCerrar = document.querySelector('.overlay-1-btn')

    document.addEventListener('touchstart', function (e) {
        // Guardamos la posición inicial del toque
        startTouch = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', function (e) {
        // Detectamos el deslizamiento hacia arriba
        let moveTouch = e.touches[0].clientY;
        if (startTouch > moveTouch && !isSliding) {
            // Si el usuario está deslizando hacia arriba y aún no hemos movido el overlay
            isSliding = true;
            overlay.style.top = '20vh';
            botonCerrar.style.opacity = '1';
        }
    });

    document.addEventListener('touchend', function () {
        // Ya no necesitamos hacer nada al final del toque, el overlay se queda en 20vh de forma indefinida
    });

    // Eventos para los bloques específicos (bloque-1 y bloque-2)
    let bloque1 = document.querySelector('.bloque-1');
    let bloque2 = document.querySelector('.bloque-2');


    // Cuando el usuario toque en bloque-1, restablecer el overlay a 80vh
    bloque1.addEventListener('touchstart', function () {
        overlay.style.top = '75vh';
        botonCerrar.style.opacity = '0';
        isSliding = false;  // Reiniciar el flag
    });

    // Cuando el usuario toque en bloque-2, restablecer el overlay a 80vh
    bloque2.addEventListener('touchstart', function () {
        overlay.style.top = '75vh';
        botonCerrar.style.opacity = '0';
        isSliding = false;  // Reiniciar el flag
    });

    botonCerrar.addEventListener('touchstart', function () {
        overlay.style.top = '75vh';
        botonCerrar.style.opacity = '0';
        isSliding = false;  // Reiniciar el flag
    });




    // Selección de elementos
    const slidingDiv = document.querySelector('.sliding-div');
    const toggleButton = document.querySelector('.boton-circular'); // Botón principal
    const reverseButton = document.querySelector('.reverse-button'); // Botón dentro del sliding-div

    // Estado para rastrear si el div está visible o no
    let isVisible = false;

    // Función para mostrar el div
    toggleButton.addEventListener('click', (e) => {
        if (!isVisible) {
            slidingDiv.style.right = '0'; // Mover el div hacia la izquierda (dentro de la vista)
            isVisible = true;

            // Evitar que el clic en el botón cierre inmediatamente el div
            e.stopPropagation();
        }
    });

    // Función para ocultar el div
    reverseButton.addEventListener('click', () => {
        closeSlidingDiv();
    });

    // Función para cerrar el div
    function closeSlidingDiv() {
        slidingDiv.style.right = '-59vw'; // Mover el div hacia la derecha (fuera de la vista)
        isVisible = false;
    }

    // Detectar clics fuera del div
    document.addEventListener('click', (e) => {
        if (isVisible && !slidingDiv.contains(e.target) && !toggleButton.contains(e.target)) {
            closeSlidingDiv(); // Cerrar el div si el clic ocurre fuera
        }
    });



    // Orden específico para la segunda sección (sección 3)
    const order = ['RA.', 'HS.', 'A.', 'TCM.'];

    // Función para desplazar a la siguiente sección
    function scrollToNextSection(button) {
        const currentSection = button.closest('section');
        const nextSection = currentSection.nextElementSibling;

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Función para manejar el scroll
    function handleScroll(event) {
        const button = event.target;
        const currentSection = button.closest('section');
        const sectionIndex = Array.from(sections).indexOf(currentSection) - 1;

        if (overlay && getComputedStyle(overlay).display === 'block') {
            overlay.style.display = 'none'; // Cambiar a none si el display es block
        }

        // Permitir desplazamiento sin restricciones en la primera sección
        if (sectionIndex < 0) {
            scrollToNextSection(button);
            return;
        }

        // Verificar si el contenido del array es solo '0'
        if (casoParticular[sectionIndex].length === 1 && casoParticular[sectionIndex][0] === '0') {
            alert('Selecciona una opción, por favor');
            return; // No continuar si no hay opción seleccionada
        }

        // Mostrar animación de carga y desplazar a la siguiente sección
        button.innerHTML = '<span class="loading-icon"></span>';
        button.disabled = true;

        setTimeout(() => {
            button.innerHTML = button.getAttribute('data-original-text') || 'Siguiente';
            button.disabled = false;

            scrollToNextSection(button);

        }, button.id === 'lastScroll' ? 3000 : 400); // Ajuste de tiempo, devolverlo a 4000 : 400 cuando se termine
    }

    // Asignar eventos a los botones
    buttons.forEach((button, index) => {
        button.setAttribute('data-original-text', button.textContent);
        button.addEventListener('click', handleScroll);
    });

    // Lógica para manejar las opciones seleccionadas en las secciones
    const options = document.querySelectorAll('.bloque-9 .option');

    options.forEach(option => {
        option.addEventListener('click', () => {
            const section = option.closest('section');
            const sectionIndex = Array.from(sections).indexOf(section);

            if (sectionIndex === 2) { // Si es la sección 3 (selección múltiple)
                const indexInArray = casoParticular[1].indexOf(option.dataset.index);

                if (indexInArray === -1) {
                    // Añadir opción seleccionada a casoParticular[1] (segunda posición)
                    casoParticular[1].push(option.dataset.index);
                    option.classList.add('selected');
                } else {
                    // Si la opción ya está seleccionada, se deselecciona
                    casoParticular[1].splice(indexInArray, 1);
                    option.classList.remove('selected');
                }

                // Ordenar las opciones seleccionadas en la sección 3
                casoParticular[1].sort((a, b) => order.indexOf(a) - order.indexOf(b));

            } else {
                // Actualización del casoParticular para secciones con selección única
                casoParticular[sectionIndex - 1] = [option.dataset.index];

                // Remover selección previa y añadir la nueva
                const allOptions = section.querySelectorAll('.option');
                allOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
            }

            // Habilitar el botón de la sección si hay una opción seleccionada
            const button = section.querySelector('.scrollButton');
            if (casoParticular[sectionIndex - 1].length > 0 && casoParticular[sectionIndex - 1][0] !== '0') {
                button.classList.remove('opaco');
            }
        });
    });


    //Esta es la sección importante, la que se ejecuta con el último botón
    endButton.addEventListener('click', () => {
        // Ordenar las opciones seleccionadas en la sección 3 (segunda posición del array) según el orden específico
        casoParticular[1].sort((a, b) => order.indexOf(a) - order.indexOf(b));

        // Filtrar y eliminar los '0' de cada posición del array
        casoParticular = casoParticular.map(arr => arr.filter(item => item !== '0'));
        localStorage.setItem('casoParticular', JSON.stringify(casoParticular));

        // Generar el string primerosTres
        const primerosTres = casoParticular.map(arr => arr.join('')).join('-');
        localStorage.setItem('primerosTres', primerosTres);

        // Inicializar las variables
        let L1, L2, H1, H2, B1, B2, P1, P2;

        // Buscar en limpiadoresEstandar
        for (const limpiador of limpiadoresEstandar) {
            if (limpiador.configuraciones.includes(primerosTres)) {
                L1 = { ...limpiador }; // Copiar el objeto
                break; // Salir del bucle una vez encontrado
            }
        }

        // Buscar en limpiadoresPremium
        for (const limpiador of limpiadoresPremium) {
            if (limpiador.configuraciones.includes(primerosTres)) {
                L2 = { ...limpiador }; // Copiar el objeto
                break; // Salir del bucle una vez encontrado
            }
        }

        // Buscar en hidratantesEstandar
        for (const hidratante of hidratantesEstandar) {
            if (hidratante.configuraciones.includes(primerosTres)) {
                H1 = { ...hidratante }; // Copiar el objeto
                break; // Salir del bucle una vez encontrado
            }
        }

        // Buscar en hidratantesPremium
        for (const hidratante of hidratantesPremium) {
            if (hidratante.configuraciones.includes(primerosTres)) {
                H2 = { ...hidratante }; // Copiar el objeto
                break; // Salir del bucle una vez encontrado
            }
        }

        // Buscar en protectoresEstandar
        for (const protector of protectoresEstandar) {
            if (protector.configuraciones.includes(primerosTres)) {
                B1 = { ...protector }; // Copiar el objeto
                break; // Salir del bucle una vez encontrado
            }
        }

        // Buscar en protectoresPremium
        for (const protector of protectoresPremium) {
            if (protector.configuraciones.includes(primerosTres)) {
                B2 = { ...protector }; // Copiar el objeto
                break; // Salir del bucle una vez encontrado
            }
        }

        // Buscar en potenciadoresEstandar
        for (const potenciador of potenciadoresEstandar) {
            if (potenciador.configuraciones.includes(primerosTres)) {
                P1 = { ...potenciador }; // Copiar el objeto
                break; // Salir del bucle una vez encontrado
            }
        }

        // Buscar en potenciadoresPremium
        for (const potenciador of potenciadoresPremium) {
            if (potenciador.configuraciones.includes(primerosTres)) {
                P2 = { ...potenciador }; // Copiar el objeto
                break; // Salir del bucle una vez encontrado
            }
        }

        localStorage.setItem('L1', JSON.stringify(L1));
        localStorage.setItem('L2', JSON.stringify(L2));
        localStorage.setItem('H1', JSON.stringify(H1));
        localStorage.setItem('H2', JSON.stringify(H2));
        localStorage.setItem('B1', JSON.stringify(B1));
        localStorage.setItem('B2', JSON.stringify(B2));
        localStorage.setItem('P1', JSON.stringify(P1));
        localStorage.setItem('P2', JSON.stringify(P2));

        redireccionLimpiador();

    });

    function redireccionLimpiador() {
        // Obtener los valores de localStorage
        const L1 = JSON.parse(localStorage.getItem('L1'));
        const L2 = JSON.parse(localStorage.getItem('L2'));
        const H1 = JSON.parse(localStorage.getItem('H1'));
        const H2 = JSON.parse(localStorage.getItem('H2'));
        const B1 = JSON.parse(localStorage.getItem('B1'));
        const B2 = JSON.parse(localStorage.getItem('B2'));
        const P1 = JSON.parse(localStorage.getItem('P1'));
        const P2 = JSON.parse(localStorage.getItem('P2'));

        // Verificar si alguna de las variables es undefined o null
        if ([L1, L2, H1, H2, B1, B2, P1, P2].includes(null) || [L1, L2, H1, H2, B1, B2, P1, P2].includes(undefined)) {
            // Si alguna variable es undefined o null, mostrar un mensaje de error
            alert('Hubo un error, por favor vuelve a presionar el botón');
        } else {
            // Si todas las variables están definidas, redirigir
            window.location.href = "../limpiador.html";
        }
    }

    function bloquesIntercambiables() {
        const interchangeableBlocks = document.querySelectorAll('.bloque-3-1.intercambiable');
        let currentIndex = 0;

        function switchContent() {
            // Get the current and next blocks
            const currentBlock = interchangeableBlocks[currentIndex];
            const nextIndex = (currentIndex + 1) % interchangeableBlocks.length;
            const nextBlock = interchangeableBlocks[nextIndex];

            // Fade out the current block
            currentBlock.classList.remove('active');

            // Fade in the next block after the fade-out completes
            setTimeout(() => {
                nextBlock.classList.add('active');
                currentIndex = nextIndex; // Update the current index
            }, 1000); // Match the fade-out duration (1s)
        }

        // Start with the first block visible
        interchangeableBlocks[0].classList.add('active');

        // Run the switching logic in an infinite loop
        setInterval(switchContent, 6000); // 5 seconds display + 1 second fade-out
    }

    const limpiadoresEstandar = [

        //DESTINADO A LAS PIELES NO SENSIBLES, DEBIDO A QUE SE APLICA POR LA MAÑANA Y POR LA NOCHE
        {
            nombre: 'Espuma 4 en 1 de Carvenchy',
            cantidad: 120,
            valor: 29900,
            categoria: "LIMPIADOR",
            foto: "espuma",
            tiempo: "MN",
            turno: 10,
            alert: "",
            replace: 1,
            calidad: 'E',
            configuraciones: ['G-RA.-N', 'G-TCM.-N', 'G-RA.HS.-N', 'G-RA.A.-N', 'G-RA.TCM.-N', 'G-HS.TCM.-N', 'G-A.TCM.-N', 'G-RA.HS.A.-N', 'G-RA.HS.TCM.-N', 'G-RA.A.TCM.-N', 'G-HS.A.TCM.-N', 'G-RA.HS.A.TCM.-N', 'M-RA.-N', 'M-TCM.-N',
                'M-RA.HS.-N', 'M-RA.A.-N', 'M-RA.TCM.-N', 'M-A.TCM.-N', 'M-RA.HS.A.-N', 'M-RA.HS.TCM.-N', 'M-RA.A.TCM.-N', 'M-RA.HS.A.TCM.-N']
        },

        //DESTINADO A ALGUNAS PIELES SENSIBLES
        {
            nombre: 'Espuma 4 en 1 de Carvenchy',
            cantidad: 120,
            valor: 29900,
            categoria: "LIMPIADOR",
            foto: "espuma",
            tiempo: "N",
            turno: 10,
            alert: "CADA DOS DÍAS, EL RESTO SOLO AGUA TIBIA",
            replace: 13,
            calidad: 'E',
            configuraciones: ['G-HS.-N', 'G-HS.-S', 'G-A.-N', 'G-A.-S', 'G-HS.A.-N', 'G-HS.A.-S']
        },

        //DESTINADO A ALGUNAS PIELES SENSIBLES
        {
            nombre: 'Espuma 4 en 1 de Carvenchy',
            cantidad: 120,
            valor: 29900,
            categoria: "LIMPIADOR",
            foto: "espuma",
            tiempo: "N",
            turno: 10,
            alert: "CADA DOS DÍAS, EL RESTO SOLO AGUA TIBIA",
            replace: 29,
            calidad: 'E',
            configuraciones: ['G-RA.-S', 'G-TCM.-S', 'G-RA.HS.-S', 'G-RA.A.-S', 'G-RA.TCM.-S', 'G-HS.TCM.-S', 'G-A.TCM.-S', 'G-RA.HS.A.-S', 'G-RA.HS.TCM.-S', 'G-RA.A.TCM.-S', 'G-HS.A.TCM.-S', 'G-RA.HS.A.TCM.-S', 'M-RA.-S', 'M-TCM.-S',
                'M-RA.HS.-S', 'M-RA.A.-S', 'M-RA.TCM.-S', 'M-A.TCM.-S', 'M-RA.HS.A.-S', 'M-RA.HS.TCM.-S', 'M-RA.A.TCM.-S', 'M-RA.HS.A.TCM.-S', 'S-RA.-N']
        },

        //CAMBIA POR EL HYDRATING CLEANSER, SOLO POR LA NOCHE EN ESTE CASO, ALGUNAS SENSIBLES O QUE SOLO QUIEREN HIDRATAR
        {
            nombre: 'Espuma 4 en 1 de Carvenchy',
            cantidad: 120,
            valor: 29900,
            categoria: "LIMPIADOR",
            foto: "espuma",
            tiempo: "N",
            turno: 10,
            alert: "CADA DOS DÍAS, EL RESTO SOLO AGUA TIBIA",
            replace: 35,
            calidad: 'E',
            configuraciones: ['M-HS.-N', 'M-HS.-S', 'M-A.-S', 'M-HS.A.-S', 'M-HS.TCM.-S', 'M-HS.A.TCM.-S', 'S-RA.-S', 'S-A.-N', 'S-A.-S', 'S-TCM.-S', 'S-RA.HS.-S', 'S-RA.A.-S', 'S-RA.TCM.-S', 'S-HS.A.-N', 'S-HS.A.-S', 'S-HS.TCM.-N',
                'S-HS.TCM.-S', 'S-A.TCM.-N', 'S-A.TCM.-S', 'S-RA.HS.A.-N', 'S-RA.HS.A.-S', 'S-RA.HS.TCM.-N', 'S-RA.HS.TCM.-S', 'S-RA.A.TCM.-S', 'S-HS.A.TCM.-N', 'S-HS.A.TCM.-S', 'S-RA.HS.A.TCM.-S']
        },

        //CAMBIA POR EL HYDRATING CLEANSER, AHORA ES DIA Y NOCHE
        {
            nombre: 'Espuma 4 en 1 de Carvenchy',
            cantidad: 120,
            valor: 29900,
            categoria: "LIMPIADOR",
            foto: "espuma",
            tiempo: "MN",
            turno: 10,
            alert: "CADA DOS DÍAS, EL RESTO SOLO AGUA TIBIA",
            replace: 37,
            calidad: 'E',
            configuraciones: ['M-A.-N', 'M-HS.A.-N', 'M-HS.TCM.-N', 'M-HS.A.TCM.-N', 'S-TCM.-N', 'S-RA.HS.-N', 'S-RA.A.-N', 'S-RA.TCM.-N', 'S-RA.A.TCM.-N', 'S-RA.HS.A.TCM.-N']
        },


        //CAMBIA POR EL HYDRATING CLEANSER, SOLO NOCHE
        {
            nombre: 'Limpiador Milk Hidrolizada de Sadoer',
            cantidad: 120,
            valor: 31200,
            categoria: "LIMPIADOR",
            foto: "sadoer-milk",
            tiempo: "N",
            turno: 10,
            alert: "",
            replace: 45,
            calidad: 'E',
            configuraciones: ['S-HS.-N', 'S-HS.-S', 'G-RA.-I', 'G-TCM.-I', 'G-RA.HS.-I', 'G-RA.A.-I', 'G-RA.TCM.-I', 'G-HS.TCM.-I', 'M-RA.TCM.-I',
                'M-RA.HS.A.TCM.-I', 'G-HS.-I', 'G-A.-I', 'G-HS.A.-I', 'G-A.TCM.-I', 'G-RA.HS.A.-I', 'G-RA.HS.TCM.-I', 'G-RA.A.TCM.-I',
                'G-HS.A.TCM.-I', 'G-RA.HS.A.TCM.-I', 'M-RA.-I', 'M-TCM.-I', 'M-RA.HS.-I', 'M-RA.A.-I', 'M-A.TCM.-I', 'M-RA.HS.A.-I', 'M-RA.HS.TCM.-I', 'M-RA.A.TCM.-I', 'S-RA.-I', 'M-HS.-I',
                'M-A.-I', 'S-A.-I', 'S-HS.A.-I', 'S-HS.TCM.-I', 'S-A.TCM.-I', 'S-RA.HS.A.-I', 'S-RA.HS.TCM.-I', 'S-HS.A.TCM.-I', 'M-HS.A.-I', 'M-HS.TCM.-I', 'M-HS.A.TCM.-I',
                'S-TCM.-I', 'S-RA.HS.-I', 'S-RA.A.-I', 'S-RA.TCM.-I', 'S-RA.A.TCM.-I', 'S-RA.HS.A.TCM.-I', 'S-RA.HS.A.-I']
        },
    ]

    const limpiadoresPremium = [

        //DESTINADO A LAS PIELES NO SENSIBLES, DEBIDO A QUE SE APLICA POR LA MAÑANA Y POR LA NOCHE
        {
            nombre: 'Smoothing SA Cleanser de CeraVe',
            cantidad: 237,
            valor: 81900,
            categoria: "LIMPIADOR",
            foto: "renewing",
            tiempo: "MN",
            turno: 10,
            alert: "",
            replace: 0,
            calidad: 'P',
            configuraciones: ['G-RA.-N', 'G-TCM.-N', 'G-RA.HS.-N', 'G-RA.A.-N', 'G-RA.TCM.-N', 'G-HS.TCM.-N', 'G-A.TCM.-N', 'G-RA.HS.A.-N', 'G-RA.HS.TCM.-N', 'G-RA.A.TCM.-N', 'G-HS.A.TCM.-N', 'G-RA.HS.A.TCM.-N', 'M-RA.-N', 'M-TCM.-N',
                'M-RA.HS.-N', 'M-RA.A.-N', 'M-RA.TCM.-N', 'M-A.TCM.-N', 'M-RA.HS.A.-N', 'M-RA.HS.TCM.-N', 'M-RA.A.TCM.-N', 'M-RA.HS.A.TCM.-N']
        },

        //DESTINADO A ALGUNAS PIELES SENSIBLES
        {
            nombre: 'La Roche-Posay Effaclar Puryfing',
            cantidad: 200,
            valor: 140000,
            categoria: "LIMPIADOR",
            foto: "effaclar",
            tiempo: "N",
            turno: 10,
            alert: "",
            replace: 12,
            calidad: 'P',
            configuraciones: ['G-HS.-N', 'G-HS.-S', 'G-A.-N', 'G-A.-S', 'G-HS.A.-N', 'G-HS.A.-S']
        },

        //DESTINADO A ALGUNAS PIELES SENSIBLES
        {
            nombre: 'Smoothing SA Cleanser de CeraVe',
            cantidad: 237,
            valor: 81900,
            categoria: "LIMPIADOR",
            foto: "renewing",
            tiempo: "N",
            turno: 10,
            alert: "CADA DOS DÍAS, EL RESTO SOLO AGUA TIBIA",
            replace: 28,
            calidad: 'P',
            configuraciones: ['G-RA.-S', 'G-TCM.-S', 'G-RA.HS.-S', 'G-RA.A.-S', 'G-RA.TCM.-S', 'G-HS.TCM.-S', 'G-A.TCM.-S', 'G-RA.HS.A.-S', 'G-RA.HS.TCM.-S', 'G-RA.A.TCM.-S', 'G-HS.A.TCM.-S', 'G-RA.HS.A.TCM.-S', 'M-RA.-S', 'M-TCM.-S',
                'M-RA.HS.-S', 'M-RA.A.-S', 'M-RA.TCM.-S', 'M-A.TCM.-S', 'M-RA.HS.A.-S', 'M-RA.HS.TCM.-S', 'M-RA.A.TCM.-S', 'M-RA.HS.A.TCM.-S', 'S-RA.-N']
        },

        //CAMBIA POR LA ESPUMA 4 EN 1 Y SOLO POR LA NOCHE
        {
            nombre: 'Limpiador Hidratante de CeraVe',
            cantidad: 473,
            valor: 112500,
            categoria: "LIMPIADOR",
            foto: "cerave-hydrating",
            tiempo: "N",
            turno: 10,
            alert: "",
            replace: 34,
            calidad: 'P',
            configuraciones: ['M-HS.-N', 'M-HS.-S', 'M-A.-S', 'M-HS.A.-S', 'M-HS.TCM.-S', 'M-HS.A.TCM.-S', 'S-RA.-S', 'S-A.-N', 'S-A.-S', 'S-TCM.-S', 'S-RA.HS.-S', 'S-RA.A.-S', 'S-RA.TCM.-S', 'S-HS.A.-N', 'S-HS.A.-S', 'S-HS.TCM.-N',
                'S-HS.TCM.-S', 'S-A.TCM.-N', 'S-A.TCM.-S', 'S-RA.HS.A.-N', 'S-RA.HS.A.-S', 'S-RA.HS.TCM.-N', 'S-RA.HS.TCM.-S', 'S-RA.A.TCM.-S', 'S-HS.A.TCM.-N', 'S-HS.A.TCM.-S', 'S-RA.HS.A.TCM.-S']
        },

        //CAMBIA POR LA ESPUMA 4 EN 1 y se aplica dia y noche
        {
            nombre: 'Limpiador Hidratante de CeraVe',
            cantidad: 473,
            valor: 112500,
            categoria: "LIMPIADOR",
            foto: "cerave-hydrating",
            tiempo: "MN",
            turno: 10,
            alert: "",
            replace: 36,
            calidad: 'P',
            configuraciones: ['M-A.-N', 'M-HS.A.-N', 'M-HS.TCM.-N', 'M-HS.A.TCM.-N', 'S-TCM.-N', 'S-RA.HS.-N', 'S-RA.A.-N', 'S-RA.TCM.-N', 'S-RA.A.TCM.-N', 'S-RA.HS.A.TCM.-N']
        },

        //CAMBIA POR LA LECHE HIDROLIZADA DE SADOER
        {
            nombre: 'Limpiador Hidratante de CeraVe',
            cantidad: 473,
            valor: 112500,
            categoria: "LIMPIADOR",
            foto: "cerave-hydrating",
            tiempo: "N",
            turno: 10,
            alert: "",
            replace: 44,
            calidad: 'P',
            configuraciones: ['S-HS.-N', 'S-HS.-S', 'G-RA.-I', 'G-TCM.-I', 'G-RA.HS.-I', 'G-RA.A.-I', 'G-RA.TCM.-I', 'G-HS.TCM.-I', 'M-RA.TCM.-I',
                'M-RA.HS.A.TCM.-I', 'G-HS.-I', 'G-A.-I', 'G-HS.A.-I', 'G-A.TCM.-I', 'G-RA.HS.A.-I', 'G-RA.HS.TCM.-I', 'G-RA.A.TCM.-I',
                'G-HS.A.TCM.-I', 'G-RA.HS.A.TCM.-I', 'M-RA.-I', 'M-TCM.-I', 'M-RA.HS.-I', 'M-RA.A.-I', 'M-A.TCM.-I', 'M-RA.HS.A.-I', 'M-RA.HS.TCM.-I', 'M-RA.A.TCM.-I', 'S-RA.-I', 'M-HS.-I',
                'M-A.-I', 'S-A.-I', 'S-HS.A.-I', 'S-HS.TCM.-I', 'S-A.TCM.-I', 'S-RA.HS.A.-I', 'S-RA.HS.TCM.-I', 'S-HS.A.TCM.-I', 'M-HS.A.-I', 'M-HS.TCM.-I', 'M-HS.A.TCM.-I',
                'S-TCM.-I', 'S-RA.HS.-I', 'S-RA.A.-I', 'S-RA.TCM.-I', 'S-RA.A.TCM.-I', 'S-RA.HS.A.TCM.-I', 'S-RA.HS.A.-I']
        },
    ]

    const hidratantesEstandar = [

        {
            nombre: 'Tónico Centella Asiatica',
            cantidad: 120,
            valor: 23500,
            categoria: "HIDRATANTE",
            foto: "centella",
            tiempo: "N",
            turno: 13,
            alert: "",
            replace: 3,
            calidad: 'E',
            configuraciones: ['G-RA.-N', 'G-HS.-N', 'S-RA.HS.-N', 'S-RA.TCM.-N', 'S-RA.TCM.-S', 'S-RA.HS.TCM.-N']
        },

        {
            nombre: 'Tónico Centella Asiatica',
            cantidad: 120,
            valor: 23500,
            categoria: "HIDRATANTE",
            foto: "centella",
            tiempo: "N",
            turno: 13,
            alert: "",
            replace: 9,
            calidad: 'E',
            configuraciones: ['G-RA.-S', 'G-HS.-S', 'G-TCM.-N', 'G-TCM.-S', 'G-RA.HS.-N', 'G-RA.HS.-S', 'G-RA.A.-N', 'G-RA.A.-S', 'G-RA.TCM.-N', 'G-RA.TCM.-S', 'G-HS.A.-N', 'G-HS.A.-S',
                'G-HS.TCM.-N', 'G-HS.TCM.-S', 'G-RA.HS.TCM.-N', 'G-RA.HS.TCM.-S', 'M-RA.-N', 'M-RA.-S', 'M-TCM.-N', 'M-TCM.-S', 'M-RA.HS.-N', 'M-RA.HS.-S', 'M-RA.TCM.-N', 'M-RA.TCM.-S',
                'M-RA.HS.TCM.-N', 'M-RA.HS.TCM.-S', 'S-RA.HS.-S', 'S-RA.HS.TCM.-S']
        },

        {
            nombre: 'Tónico de Hinojo Marino',
            cantidad: 120,
            valor: 22900,
            categoria: "HIDRATANTE",
            foto: "sea-fennel",
            tiempo: "MN",
            turno: 13,
            alert: "",
            replace: 33,
            calidad: 'E',
            configuraciones: ['G-A.TCM.-N', 'G-A.TCM.-S', 'G-A.-N', 'G-A.-S', 'G-RA.HS.A.-N', 'G-RA.HS.A.-S', 'G-RA.A.TCM.-N', 'G-RA.A.TCM.-S', 'G-HS.A.TCM.-N', 'G-HS.A.TCM.-S', 'G-RA.HS.A.TCM.-N', 'G-RA.HS.A.TCM.-S', 'M-HS.-N', 'M-HS.-S',
                'M-A.-N', 'M-A.-S', 'M-RA.A.-N', 'M-RA.A.-S', 'M-HS.A.-N', 'M-HS.A.-S', 'M-HS.TCM.-N', 'M-HS.TCM.-S', 'M-A.TCM.-N', 'M-A.TCM.-S', 'M-RA.HS.A.-N', 'M-RA.HS.A.-S', 'M-RA.A.TCM.-N', 'M-RA.A.TCM.-S', 'M-HS.A.TCM.-N',
                'M-HS.A.TCM.-S', 'M-RA.HS.A.TCM.-N', 'M-RA.HS.A.TCM.-S', 'S-TCM.-S', 'S-RA.A.-S', 'S-HS.A.-S']
        },

        {
            nombre: 'Tónico Centella Asiatica',
            cantidad: 120,
            valor: 23500,
            categoria: "HIDRATANTE",
            foto: "centella",
            tiempo: "N",
            turno: 13,
            alert: "",
            replace: 43,
            calidad: 'E',
            configuraciones: ['S-RA.-N', 'S-RA.-S']
        },

        //ESTE SE INTERCAMBIA POR EL CERAVE MOISTURZING, EL GRANDE
        {
            nombre: 'Tónico de Hinojo Marino',
            cantidad: 120,
            valor: 22900,
            categoria: "HIDRATANTE",
            foto: "sea-fennel",
            tiempo: "MN",
            turno: 13,
            alert: "",
            replace: 47,
            calidad: 'E',
            configuraciones: ['S-HS.-N', 'S-HS.-S', 'S-A.-N', 'S-A.-S', 'S-RA.A.TCM.-N', 'S-RA.A.TCM.-S', 'S-HS.A.TCM.-N', 'S-HS.A.TCM.-S', 'S-RA.HS.A.TCM.-N', 'S-RA.HS.A.TCM.-S', 'G-RA.-I', 'G-TCM.-I', 'G-RA.HS.-I', 'G-RA.A.-I', 'G-RA.TCM.-I', 'G-HS.TCM.-I', 'M-RA.TCM.-I',
                'M-RA.HS.A.TCM.-I', 'G-HS.-I', 'G-A.-I', 'G-HS.A.-I', 'G-A.TCM.-I', 'G-RA.HS.A.-I', 'G-RA.HS.TCM.-I', 'G-RA.A.TCM.-I',
                'G-HS.A.TCM.-I', 'G-RA.HS.A.TCM.-I', 'M-RA.-I', 'M-TCM.-I', 'M-RA.HS.-I', 'M-RA.A.-I', 'M-A.TCM.-I', 'M-RA.HS.A.-I', 'M-RA.HS.TCM.-I', 'M-RA.A.TCM.-I', 'S-RA.-I', 'M-HS.-I',
                'M-A.-I', 'S-A.-I', 'S-HS.A.-I', 'S-HS.TCM.-I', 'S-A.TCM.-I', 'S-RA.HS.A.-I', 'S-RA.HS.TCM.-I', 'S-HS.A.TCM.-I', 'M-HS.A.-I', 'M-HS.TCM.-I', 'M-HS.A.TCM.-I',
                'S-TCM.-I', 'S-RA.HS.-I', 'S-RA.A.-I', 'S-RA.TCM.-I', 'S-RA.A.TCM.-I', 'S-RA.HS.A.TCM.-I', 'S-RA.HS.A.-I']
        },

        //ESTE SE INTERCAMBIA POR EL NEUTROGENA HYDROBOOST
        {
            nombre: 'Tónico de Hinojo Marino',
            cantidad: 120,
            valor: 22900,
            categoria: "HIDRATANTE",
            foto: "sea-fennel",
            tiempo: "MN",
            turno: 13,
            alert: "",
            replace: 49,
            calidad: 'E',
            configuraciones: ['S-TCM.-N', 'S-RA.A.-N', 'S-HS.A.-N', 'S-HS.TCM.-N', 'S-HS.TCM.-S', 'S-A.TCM.-N', 'S-A.TCM.-S', 'S-RA.HS.A.-N', 'S-RA.HS.A.-S']
        },
    ]

    const hidratantesPremium = [

        {
            nombre: 'Neutrogena Hydroboost',
            cantidad: 50,
            valor: 73500,
            categoria: "HIDRATANTE",
            foto: "neutrogena-2",
            tiempo: "N",
            turno: 20,
            alert: "",
            replace: 2,
            calidad: 'P',
            configuraciones: ['G-RA.-N', 'G-HS.-N', 'S-RA.HS.-N', 'S-RA.TCM.-N', 'S-RA.TCM.-S', 'S-RA.HS.TCM.-N']
        },

        {
            nombre: 'Facial Moisturising Lotion PM',
            cantidad: 52,
            valor: 87900,
            categoria: "HIDRATANTE",
            foto: "pm-lotion",
            tiempo: "N",
            turno: 20,
            alert: "",
            replace: 8,
            calidad: 'P',
            configuraciones: ['G-RA.-S', 'G-HS.-S', 'G-TCM.-N', 'G-TCM.-S', 'G-RA.HS.-N', 'G-RA.HS.-S', 'G-RA.A.-N', 'G-RA.A.-S', 'G-RA.TCM.-N', 'G-RA.TCM.-S', 'G-HS.A.-N', 'G-HS.A.-S',
                'G-HS.TCM.-N', 'G-HS.TCM.-S', 'G-RA.HS.TCM.-N', 'G-RA.HS.TCM.-S', 'M-RA.-N', 'M-RA.-S', 'M-TCM.-N', 'M-TCM.-S', 'M-RA.HS.-N', 'M-RA.HS.-S', 'M-RA.TCM.-N', 'M-RA.TCM.-S',
                'M-RA.HS.TCM.-N', 'M-RA.HS.TCM.-S', 'S-RA.HS.-S', 'S-RA.HS.TCM.-S']
        },

        {
            nombre: 'Facial Moisturising Lotion PM',
            cantidad: 52,
            valor: 87900,
            categoria: "HIDRATANTE",
            foto: "pm-lotion",
            tiempo: "N",
            turno: 20,
            alert: "",
            replace: 32,
            calidad: 'P',
            configuraciones: ['G-A.TCM.-N', 'G-A.TCM.-S', 'G-A.-N', 'G-A.-S', 'G-RA.HS.A.-N', 'G-RA.HS.A.-S', 'G-RA.A.TCM.-N', 'G-RA.A.TCM.-S', 'G-HS.A.TCM.-N', 'G-HS.A.TCM.-S', 'G-RA.HS.A.TCM.-N', 'G-RA.HS.A.TCM.-S', 'M-HS.-N', 'M-HS.-S',
                'M-A.-N', 'M-A.-S', 'M-RA.A.-N', 'M-RA.A.-S', 'M-HS.A.-N', 'M-HS.A.-S', 'M-HS.TCM.-N', 'M-HS.TCM.-S', 'M-A.TCM.-N', 'M-A.TCM.-S', 'M-RA.HS.A.-N', 'M-RA.HS.A.-S', 'M-RA.A.TCM.-N', 'M-RA.A.TCM.-S', 'M-HS.A.TCM.-N',
                'M-HS.A.TCM.-S', 'M-RA.HS.A.TCM.-N', 'M-RA.HS.A.TCM.-S', 'S-TCM.-S', 'S-RA.A.-S', 'S-HS.A.-S']
        },

        //ESTA SE INTERCAMBIA POR EL TONICO DE CENTELLA ASIATICA
        {
            nombre: 'Crema Hidratante de Cerave',
            cantidad: 454,
            valor: 91900,
            categoria: "HIDRATANTE",
            foto: "cerave-cream",
            tiempo: "MN",
            turno: 20,
            alert: "",
            replace: 42,
            calidad: 'P',
            configuraciones: ['S-RA.-N', 'S-RA.-S']
        },

        //ESTE SE INTERCAMBIA POR EL SEA FENNEL
        {
            nombre: 'Crema Hidratante de Cerave',
            cantidad: 454,
            valor: 91900,
            categoria: "HIDRATANTE",
            foto: "cerave-cream",
            tiempo: "MN",
            turno: 20,
            alert: "",
            replace: 46,
            calidad: 'P',
            configuraciones: ['S-HS.-N', 'S-HS.-S', 'S-A.-N', 'S-A.-S', 'S-RA.A.TCM.-N', 'S-RA.A.TCM.-S', 'S-HS.A.TCM.-N', 'S-HS.A.TCM.-S', 'S-RA.HS.A.TCM.-N', 'S-RA.HS.A.TCM.-S', 'G-RA.-I', 'G-TCM.-I', 'G-RA.HS.-I', 'G-RA.A.-I', 'G-RA.TCM.-I', 'G-HS.TCM.-I', 'M-RA.TCM.-I',
                'M-RA.HS.A.TCM.-I', 'G-HS.-I', 'G-A.-I', 'G-HS.A.-I', 'G-A.TCM.-I', 'G-RA.HS.A.-I', 'G-RA.HS.TCM.-I', 'G-RA.A.TCM.-I',
                'G-HS.A.TCM.-I', 'G-RA.HS.A.TCM.-I', 'M-RA.-I', 'M-TCM.-I', 'M-RA.HS.-I', 'M-RA.A.-I', 'M-A.TCM.-I', 'M-RA.HS.A.-I', 'M-RA.HS.TCM.-I', 'M-RA.A.TCM.-I', 'S-RA.-I', 'M-HS.-I',
                'M-A.-I', 'S-A.-I', 'S-HS.A.-I', 'S-HS.TCM.-I', 'S-A.TCM.-I', 'S-RA.HS.A.-I', 'S-RA.HS.TCM.-I', 'S-HS.A.TCM.-I', 'M-HS.A.-I', 'M-HS.TCM.-I', 'M-HS.A.TCM.-I',
                'S-TCM.-I', 'S-RA.HS.-I', 'S-RA.A.-I', 'S-RA.TCM.-I', 'S-RA.A.TCM.-I', 'S-RA.HS.A.TCM.-I', 'S-RA.HS.A.-I']
        },

        //ESTE SE INTERCAMBIA POR EL SEA FENNEL
        {
            nombre: 'Neutrogena Hydroboost',
            cantidad: 50,
            valor: 73500,
            categoria: "HIDRATANTE",
            foto: "neutrogena-2",
            tiempo: "N",
            turno: 20,
            alert: "",
            replace: 48,
            calidad: 'P',
            configuraciones: ['S-TCM.-N', 'S-RA.A.-N', 'S-HS.A.-N', 'S-HS.TCM.-N', 'S-HS.TCM.-S', 'S-A.TCM.-N', 'S-A.TCM.-S', 'S-RA.HS.A.-N', 'S-RA.HS.A.-S']
        },
    ]

    const protectoresEstandar = [
        {
            nombre: 'Aloe Vera Sunscreen FPS+60 de Bioaqua',
            cantidad: 150,
            valor: 27500,
            categoria: "BLOQUEADOR",
            foto: "aloe",
            tiempo: "M",
            turno: 30,
            alert: "",
            replace: 5,
            calidad: 'E',
            configuraciones: ['G-RA.-N', 'G-RA.-S', 'G-HS.-N', 'G-HS.-S', 'G-A.-N', 'G-A.-S', 'G-TCM.-N', 'G-TCM.-S', 'G-RA.HS.-N', 'G-RA.HS.-S', 'G-RA.A.-N', 'G-RA.A.-S', 'G-RA.TCM.-N', 'G-RA.TCM.-S', 'G-HS.A.-N', 'G-HS.A.-S',
                'G-HS.TCM.-N', 'G-HS.TCM.-S', 'G-A.TCM.-N', 'G-A.TCM.-S', 'G-RA.HS.A.-N', 'G-RA.HS.A.-S', 'G-RA.HS.TCM.-N', 'G-RA.HS.TCM.-S', 'G-RA.A.TCM.-N', 'G-RA.A.TCM.-S', 'G-HS.A.TCM.-N', 'G-HS.A.TCM.-S', 'G-RA.HS.A.TCM.-N',
                'G-RA.HS.A.TCM.-S', 'M-RA.-N', 'M-RA.-S', 'M-HS.-N', 'M-HS.-S', 'M-A.-N', 'M-A.-S', 'M-TCM.-N', 'M-TCM.-S', 'M-RA.HS.-N', 'M-RA.HS.-S', 'M-RA.A.-N', 'M-RA.A.-S', 'M-RA.TCM.-N', 'M-RA.TCM.-S', 'M-HS.A.-N', 'M-HS.A.-S',
                'M-HS.TCM.-N', 'M-HS.TCM.-S', 'M-A.TCM.-N', 'M-A.TCM.-S', 'M-RA.HS.A.-N', 'M-RA.HS.A.-S', 'M-RA.HS.TCM.-N', 'M-RA.HS.TCM.-S', 'M-RA.A.TCM.-N', 'M-RA.A.TCM.-S', 'M-HS.A.TCM.-N', 'M-HS.A.TCM.-S', 'M-RA.HS.A.TCM.-N',
                'M-RA.HS.A.TCM.-S']
        },

        {
            nombre: 'Aloe Vera Sunscreen FPS+60 de Bioaqua',
            cantidad: 150,
            valor: 27500,
            categoria: "BLOQUEADOR",
            foto: "aloe",
            tiempo: "M",
            turno: 30,
            alert: "",
            replace: 41,
            calidad: 'E',
            configuraciones: ['S-RA.-N', 'S-RA.-S', 'S-HS.-N', 'S-HS.-S', 'S-A.-N', 'S-A.-S', 'S-TCM.-N', 'S-TCM.-S', 'S-RA.HS.-N', 'S-RA.HS.-S', 'S-RA.A.-N', 'S-RA.A.-S', 'S-RA.TCM.-N', 'S-RA.TCM.-S', 'S-HS.A.-N', 'S-HS.A.-S',
                'S-HS.TCM.-N', 'S-HS.TCM.-S', 'S-A.TCM.-N', 'S-A.TCM.-S', 'S-RA.HS.A.-N', 'S-RA.HS.A.-S', 'S-RA.HS.TCM.-N', 'S-RA.HS.TCM.-S', 'S-RA.A.TCM.-N', 'S-RA.A.TCM.-S', 'S-HS.A.TCM.-N', 'S-HS.A.TCM.-S', 'S-RA.HS.A.TCM.-N',
                'S-RA.HS.A.TCM.-S', 'G-RA.-I', 'G-TCM.-I', 'G-RA.HS.-I', 'G-RA.A.-I', 'G-RA.TCM.-I', 'G-HS.TCM.-I', 'M-RA.TCM.-I',
                'M-RA.HS.A.TCM.-I', 'G-HS.-I', 'G-A.-I', 'G-HS.A.-I', 'G-A.TCM.-I', 'G-RA.HS.A.-I', 'G-RA.HS.TCM.-I', 'G-RA.A.TCM.-I',
                'G-HS.A.TCM.-I', 'G-RA.HS.A.TCM.-I', 'M-RA.-I', 'M-TCM.-I', 'M-RA.HS.-I', 'M-RA.A.-I', 'M-A.TCM.-I', 'M-RA.HS.A.-I', 'M-RA.HS.TCM.-I', 'M-RA.A.TCM.-I', 'S-RA.-I', 'M-HS.-I',
                'M-A.-I', 'S-A.-I', 'S-HS.A.-I', 'S-HS.TCM.-I', 'S-A.TCM.-I', 'S-RA.HS.A.-I', 'S-RA.HS.TCM.-I', 'S-HS.A.TCM.-I', 'M-HS.A.-I', 'M-HS.TCM.-I', 'M-HS.A.TCM.-I',
                'S-TCM.-I', 'S-RA.HS.-I', 'S-RA.A.-I', 'S-RA.TCM.-I', 'S-RA.A.TCM.-I', 'S-RA.HS.A.TCM.-I', 'S-RA.HS.A.-I']
        }
    ]

    const protectoresPremium = [
        {
            nombre: 'Eucerin Oil Control FPS+50',
            cantidad: 50,
            valor: 134000,
            categoria: "BLOQUEADOR",
            foto: "eucerin",
            tiempo: "M",
            turno: 30,
            alert: "",
            replace: 4,
            calidad: 'P',
            configuraciones: ['G-RA.-N', 'G-RA.-S', 'G-HS.-N', 'G-HS.-S', 'G-A.-N', 'G-A.-S', 'G-TCM.-N', 'G-TCM.-S', 'G-RA.HS.-N', 'G-RA.HS.-S', 'G-RA.A.-N', 'G-RA.A.-S', 'G-RA.TCM.-N', 'G-RA.TCM.-S', 'G-HS.A.-N', 'G-HS.A.-S',
                'G-HS.TCM.-N', 'G-HS.TCM.-S', 'G-A.TCM.-N', 'G-A.TCM.-S', 'G-RA.HS.A.-N', 'G-RA.HS.A.-S', 'G-RA.HS.TCM.-N', 'G-RA.HS.TCM.-S', 'G-RA.A.TCM.-N', 'G-RA.A.TCM.-S', 'G-HS.A.TCM.-N', 'G-HS.A.TCM.-S', 'G-RA.HS.A.TCM.-N',
                'G-RA.HS.A.TCM.-S', 'M-RA.-N', 'M-RA.-S', 'M-HS.-N', 'M-HS.-S', 'M-A.-N', 'M-A.-S', 'M-TCM.-N', 'M-TCM.-S', 'M-RA.HS.-N', 'M-RA.HS.-S', 'M-RA.A.-N', 'M-RA.A.-S', 'M-RA.TCM.-N', 'M-RA.TCM.-S', 'M-HS.A.-N', 'M-HS.A.-S',
                'M-HS.TCM.-N', 'M-HS.TCM.-S', 'M-A.TCM.-N', 'M-A.TCM.-S', 'M-RA.HS.A.-N', 'M-RA.HS.A.-S', 'M-RA.HS.TCM.-N', 'M-RA.HS.TCM.-S', 'M-RA.A.TCM.-N', 'M-RA.A.TCM.-S', 'M-HS.A.TCM.-N', 'M-HS.A.TCM.-S', 'M-RA.HS.A.TCM.-N',
                'M-RA.HS.A.TCM.-S']
        },

        {
            nombre: 'ISDIN Fusion Water Magic SPF 50',
            cantidad: 50,
            valor: 109900,
            categoria: "BLOQUEADOR",
            foto: "isdin",
            tiempo: "M",
            turno: 30,
            alert: "",
            replace: 40,
            calidad: 'P',
            configuraciones: ['S-RA.-N', 'S-RA.-S', 'S-HS.-N', 'S-HS.-S', 'S-A.-N', 'S-A.-S', 'S-TCM.-N', 'S-TCM.-S', 'S-RA.HS.-N', 'S-RA.HS.-S', 'S-RA.A.-N', 'S-RA.A.-S', 'S-RA.TCM.-N', 'S-RA.TCM.-S', 'S-HS.A.-N', 'S-HS.A.-S',
                'S-HS.TCM.-N', 'S-HS.TCM.-S', 'S-A.TCM.-N', 'S-A.TCM.-S', 'S-RA.HS.A.-N', 'S-RA.HS.A.-S', 'S-RA.HS.TCM.-N', 'S-RA.HS.TCM.-S', 'S-RA.A.TCM.-N', 'S-RA.A.TCM.-S', 'S-HS.A.TCM.-N', 'S-HS.A.TCM.-S', 'S-RA.HS.A.TCM.-N',
                'S-RA.HS.A.TCM.-S', 'G-RA.-I', 'G-TCM.-I', 'G-RA.HS.-I', 'G-RA.A.-I', 'G-RA.TCM.-I', 'G-HS.TCM.-I', 'M-RA.TCM.-I',
                'M-RA.HS.A.TCM.-I', 'G-HS.-I', 'G-A.-I', 'G-HS.A.-I', 'G-A.TCM.-I', 'G-RA.HS.A.-I', 'G-RA.HS.TCM.-I', 'G-RA.A.TCM.-I',
                'G-HS.A.TCM.-I', 'G-RA.HS.A.TCM.-I', 'M-RA.-I', 'M-TCM.-I', 'M-RA.HS.-I', 'M-RA.A.-I', 'M-A.TCM.-I', 'M-RA.HS.A.-I', 'M-RA.HS.TCM.-I', 'M-RA.A.TCM.-I', 'S-RA.-I', 'M-HS.-I',
                'M-A.-I', 'S-A.-I', 'S-HS.A.-I', 'S-HS.TCM.-I', 'S-A.TCM.-I', 'S-RA.HS.A.-I', 'S-RA.HS.TCM.-I', 'S-HS.A.TCM.-I', 'M-HS.A.-I', 'M-HS.TCM.-I', 'M-HS.A.TCM.-I',
                'S-TCM.-I', 'S-RA.HS.-I', 'S-RA.A.-I', 'S-RA.TCM.-I', 'S-RA.A.TCM.-I', 'S-RA.HS.A.TCM.-I', 'S-RA.HS.A.-I']
        }
    ]

    const potenciadoresEstandar = [
        //Su pareja es el differin 
        {
            nombre: 'Serum Niacinamida de Bioaqua',
            cantidad: 30,
            valor: 23900,
            categoria: "POTENCIADOR",
            foto: "niacinamida",
            tiempo: "N",
            turno: 15,
            alert: "",
            replace: 7,
            calidad: 'E',
            configuraciones: ['G-RA.-N', 'G-RA.HS.-N', 'M-RA.-N', 'S-RA.-N']
        },

        //Su pareja es el the ordinary niacinaimda & zinc
        {
            nombre: 'Serum Niacinamida de Bioaqua',
            cantidad: 30,
            valor: 23900,
            categoria: "POTENCIADOR",
            foto: "niacinamida",
            tiempo: "N",
            turno: 15,
            alert: "",
            replace: 11,
            calidad: 'E',
            configuraciones: ['G-RA.-S', 'G-RA.HS.-S', 'G-RA.A.-S', 'G-RA.TCM.-S', 'M-RA.-S', 'M-RA.HS.-N', 'M-RA.HS.-S', 'M-RA.A.-S', 'M-RA.TCM.-S', 'M-RA.HS.A.-S', 'M-RA.HS.TCM.-S', 'M-RA.A.TCM.-S', 'M-RA.HS.A.TCM.-S', 'S-RA.-S',
                'S-RA.HS.-N', 'S-RA.HS.-S', 'S-RA.A.-S', 'S-RA.TCM.-S', 'S-HS.TCM.-S']
        },
        {
            nombre: 'Sérum Hialurónico de Bioaqua',
            cantidad: 30,
            valor: 21900,
            categoria: "POTENCIADOR",
            foto: "bio-hialuronico",
            tiempo: "N",
            turno: 40,
            alert: "",
            replace: 15,
            calidad: 'E',
            configuraciones: ['G-HS.-N', 'G-HS.-S', 'M-HS.-N', 'M-HS.-S', 'S-HS.-N', 'S-HS.-S', 'G-RA.-I', 'G-TCM.-I', 'G-RA.HS.-I', 'G-RA.A.-I', 'G-RA.TCM.-I', 'G-HS.TCM.-I', 'M-RA.TCM.-I',
                'M-RA.HS.A.TCM.-I', 'G-HS.-I', 'G-A.-I', 'G-HS.A.-I', 'G-A.TCM.-I', 'G-RA.HS.A.-I', 'G-RA.HS.TCM.-I', 'G-RA.A.TCM.-I',
                'G-HS.A.TCM.-I', 'G-RA.HS.A.TCM.-I', 'M-RA.-I', 'M-TCM.-I', 'M-RA.HS.-I', 'M-RA.A.-I', 'M-A.TCM.-I', 'M-RA.HS.A.-I', 'M-RA.HS.TCM.-I', 'M-RA.A.TCM.-I', 'S-RA.-I', 'M-HS.-I',
                'M-A.-I', 'S-A.-I', 'S-HS.A.-I', 'S-HS.TCM.-I', 'S-A.TCM.-I', 'S-RA.HS.A.-I', 'S-RA.HS.TCM.-I', 'S-HS.A.TCM.-I', 'M-HS.A.-I', 'M-HS.TCM.-I', 'M-HS.A.TCM.-I',
                'S-TCM.-I', 'S-RA.HS.-I', 'S-RA.A.-I', 'S-RA.TCM.-I', 'S-RA.A.TCM.-I', 'S-RA.HS.A.TCM.-I', 'S-RA.HS.A.-I']
        },

        //Su pareja es el the ordinary retinol, este es el que es usa dos veces por semana
        {
            nombre: 'Sérum Retinol de Vibrant Glamoúr',
            cantidad: 30,
            valor: 36500,
            categoria: "POTENCIADOR",
            foto: "vibrant-retinol",
            tiempo: "N",
            turno: 15,
            alert: "SOLO DOS VECES POR SEMANA",
            replace: 17,
            calidad: 'E',
            configuraciones: ['G-A.-N', 'G-RA.A.-N', 'G-HS.A.-N', 'G-A.TCM.-N', 'G-HS.A.TCM.-N', 'G-RA.HS.A.TCM.-N', 'M-A.-N', 'M-HS.A.-N', 'M-A.TCM.-N', 'M-RA.HS.A.-N', 'M-RA.A.TCM.-N', 'M-HS.A.TCM.-N', 'M-RA.HS.A.TCM.-N', 'S-A.-N',
                'S-RA.A.-N', 'S-HS.A.-N', 'S-A.TCM.-N', 'S-RA.HS.A.-N', 'S-RA.A.TCM.-N', 'S-HS.A.TCM.-N', 'S-RA.HS.A.TCM.-N']
        },
        {
            nombre: 'Sérum de Vitamina C Bioaqua',
            cantidad: 30,
            valor: 24500,
            categoria: "POTENCIADOR",
            foto: "bio-vit-c",
            tiempo: "N",
            turno: 15,
            alert: "",
            replace: 19,
            calidad: 'E',
            configuraciones: ['G-A.-S', 'G-TCM.-S', 'G-HS.A.-S', 'G-HS.TCM.-S', 'G-A.TCM.-S', 'G-RA.HS.A.-S', 'M-A.-S', 'M-TCM.-S', 'M-HS.A.-S', 'M-A.TCM.-S', 'M-HS.A.TCM.-S', 'S-A.-S', 'S-HS.A.-S']
        },

        //Su pareja es el acido glicolico de the ordinary
        {
            nombre: 'Pads Ácido Glicólico de Elaimei',
            cantidad: 100,
            valor: 24900,
            categoria: "POTENCIADOR",
            foto: "elaimei-glycolyc",
            tiempo: "N",
            turno: 15,
            alert: "SOLO DOS VECES POR SEMANA",
            replace: 21,
            calidad: 'E',
            configuraciones: ['G-TCM.-N', 'G-HS.TCM.-N', 'M-TCM.-N', 'M-RA.TCM.-N', 'M-HS.TCM.-N', 'M-RA.HS.TCM.-N']
        },

        //Su pareja es el differin
        {
            nombre: 'Pads Ácido Glicólico de Elaimei',
            cantidad: 100,
            valor: 24900,
            categoria: "POTENCIADOR",
            foto: "elaimei-glycolyc",
            tiempo: "N",
            turno: 15,
            alert: "SOLO DOS VECES POR SEMANA",
            replace: 23,
            calidad: 'E',
            configuraciones: []
        },

        //Su pareja es el differin
        {
            nombre: 'Sérum Retinol de Vibrant Glamoúr',
            cantidad: 30,
            valor: 36500,
            categoria: "POTENCIADOR",
            foto: "vibrant-retinol",
            tiempo: "N",
            turno: 15,
            alert: "SOLO DOS VECES POR SEMANA",
            replace: 25,
            calidad: 'E',
            configuraciones: ['G-RA.TCM.-N', 'G-RA.HS.A.-N', 'G-RA.HS.TCM.-N', 'G-RA.A.TCM.-N', 'M-RA.A.-N']
        },

        //Su pareja es el otro retinol, pero estos son una vez por semana
        {
            nombre: 'Sérum Retinol de Vibrant Glamoúr',
            cantidad: 30,
            valor: 36500,
            categoria: "POTENCIADOR",
            foto: "vibrant-retinol",
            tiempo: "N",
            turno: 15,
            alert: "SOLO UNA VEZ POR SEMANA",
            replace: 27,
            calidad: 'E',
            configuraciones: ['G-RA.HS.TCM.-S', 'G-RA.A.TCM.-S', 'G-HS.A.TCM.-S', 'G-RA.HS.A.TCM.-S']
        },

        //Su pareja es el ácido láctico
        {
            nombre: 'Serum Niacinamida de Bioaqua',
            cantidad: 30,
            valor: 23900,
            categoria: "POTENCIADOR",
            foto: "niacinamida",
            tiempo: "N",
            turno: 15,
            alert: "",
            replace: 39,
            calidad: 'E',
            configuraciones: ['M-HS.TCM.-S', 'S-TCM.-N', 'S-TCM.-S', 'S-HS.TCM.-N', 'S-A.TCM.-S', 'S-RA.HS.A.-S', 'S-RA.HS.TCM.-N', 'S-RA.HS.TCM.-S', 'S-RA.A.TCM.-S', 'S-HS.A.TCM.-S', 'S-RA.HS.A.TCM.-S']
        },

        //Su pareja es el ácido glicolico de the ordinary
        {
            nombre: 'Serum Niacinamida de Bioaqua',
            cantidad: 30,
            valor: 23900,
            categoria: "POTENCIADOR",
            foto: "niacinamida",
            tiempo: "N",
            turno: 15,
            alert: "",
            replace: 51,
            calidad: 'E',
            configuraciones: ['S-RA.TCM.-N']
        },
    ]

    const potenciadoresPremium = [
        {
            nombre: 'Differin Adapalene 0.1%',
            cantidad: 30,
            valor: 134100,
            categoria: "POTENCIADOR",
            foto: "adapaleno",
            tiempo: "N",
            turno: 15,
            alert: "SOLO DOS VECES POR SEMANA",
            replace: 6,
            calidad: 'P',
            configuraciones: ['G-RA.-N', 'G-RA.HS.-N', 'M-RA.-N', 'S-RA.-N']
        },
        {
            nombre: 'The Ordinary Niacinamida 10% + Zinc 1%',
            cantidad: 30,
            valor: 77900,
            categoria: "POTENCIADOR",
            foto: "to-niacinamida",
            tiempo: "N",
            turno: 15,
            alert: "CADA 2 O 3 DÍAS",
            replace: 10,
            calidad: 'P',
            configuraciones: ['G-RA.-S', 'G-RA.HS.-S', 'G-RA.A.-S', 'G-RA.TCM.-S', 'M-RA.-S', 'M-RA.HS.-N', 'M-RA.HS.-S', 'M-RA.A.-S', 'M-RA.TCM.-S', 'M-RA.HS.A.-S', 'M-RA.HS.TCM.-S', 'M-RA.A.TCM.-S', 'M-RA.HS.A.TCM.-S', 'S-RA.-S',
                'S-RA.HS.-N', 'S-RA.HS.-S', 'S-RA.A.-S', 'S-RA.TCM.-S', 'S-HS.TCM.-S']
        },
        {
            nombre: 'Sérum Hialurónico 2% + B5 The Ordinary',
            cantidad: 30,
            valor: 63000,
            categoria: "POTENCIADOR",
            foto: "to-hialuronico",
            tiempo: "N",
            turno: 15,
            alert: "",
            replace: 14,
            calidad: 'P',
            configuraciones: ['G-HS.-N', 'G-HS.-S', 'M-HS.-N', 'M-HS.-S', 'S-HS.-N', 'S-HS.-S', 'G-RA.-I', 'G-TCM.-I', 'G-RA.HS.-I', 'G-RA.A.-I', 'G-RA.TCM.-I', 'G-HS.TCM.-I', 'M-RA.TCM.-I',
                'M-RA.HS.A.TCM.-I', 'G-HS.-I', 'G-A.-I', 'G-HS.A.-I', 'G-A.TCM.-I', 'G-RA.HS.A.-I', 'G-RA.HS.TCM.-I', 'G-RA.A.TCM.-I',
                'G-HS.A.TCM.-I', 'G-RA.HS.A.TCM.-I', 'M-RA.-I', 'M-TCM.-I', 'M-RA.HS.-I', 'M-RA.A.-I', 'M-A.TCM.-I', 'M-RA.HS.A.-I', 'M-RA.HS.TCM.-I', 'M-RA.A.TCM.-I', 'S-RA.-I', 'M-HS.-I',
                'M-A.-I', 'S-A.-I', 'S-HS.A.-I', 'S-HS.TCM.-I', 'S-A.TCM.-I', 'S-RA.HS.A.-I', 'S-RA.HS.TCM.-I', 'S-HS.A.TCM.-I', 'M-HS.A.-I', 'M-HS.TCM.-I', 'M-HS.A.TCM.-I',
                'S-TCM.-I', 'S-RA.HS.-I', 'S-RA.A.-I', 'S-RA.TCM.-I', 'S-RA.A.TCM.-I', 'S-RA.HS.A.TCM.-I', 'S-RA.HS.A.-I']
        },
        {
            nombre: 'The Ordinary Retinol 0.2% in Squalane',
            cantidad: 30,
            valor: 73500,
            categoria: "POTENCIADOR",
            foto: "to-retinol",
            tiempo: "N",
            turno: 15,
            alert: "SOLO DOS VECES POR SEMANA",
            replace: 16,
            calidad: 'P',
            configuraciones: ['G-A.-N', 'G-RA.A.-N', 'G-HS.A.-N', 'G-A.TCM.-N', 'G-HS.A.TCM.-N', 'G-RA.HS.A.TCM.-N', 'M-A.-N', 'M-HS.A.-N', 'M-A.TCM.-N', 'M-RA.HS.A.-N', 'M-RA.A.TCM.-N', 'M-HS.A.TCM.-N', 'M-RA.HS.A.TCM.-N', 'S-A.-N',
                'S-RA.A.-N', 'S-HS.A.-N', 'S-A.TCM.-N', 'S-RA.HS.A.-N', 'S-RA.A.TCM.-N', 'S-HS.A.TCM.-N', 'S-RA.HS.A.TCM.-N']
        },
        {
            nombre: 'CeraVe Skin Renewing Vitamin C Serum',
            cantidad: 30,
            valor: 138900,
            categoria: "POTENCIADOR",
            foto: "cerave-vit-c",
            tiempo: "N",
            turno: 15,
            alert: "",
            replace: 18,
            calidad: 'P',
            configuraciones: ['G-A.-S', 'G-TCM.-S', 'G-HS.A.-S', 'G-HS.TCM.-S', 'G-A.TCM.-S', 'G-RA.HS.A.-S', 'M-A.-S', 'M-TCM.-S', 'M-HS.A.-S', 'M-A.TCM.-S', 'M-HS.A.TCM.-S', 'S-A.-S', 'S-HS.A.-S']
        },
        {
            nombre: 'The Ordinary Ácido Glicólico 7% Toning Solution',
            cantidad: 240,
            valor: 122300,
            categoria: "POTENCIADOR",
            foto: "to-glycolyc",
            tiempo: "N",
            turno: 15,
            alert: "DÍA DE POR MEDIO",
            replace: 20,
            calidad: 'P',
            configuraciones: ['G-TCM.-N', 'G-HS.TCM.-N', 'M-TCM.-N', 'M-RA.TCM.-N', 'M-HS.TCM.-N', 'M-RA.HS.TCM.-N']
        },
        {
            nombre: 'Differin Adapalene 0.1%',
            cantidad: 30,
            valor: 134100,
            categoria: "POTENCIADOR",
            foto: "adapaleno",
            tiempo: "N",
            turno: 15,
            alert: "SOLO DOS VECES POR SEMANA",
            replace: 22,
            calidad: 'P',
            configuraciones: []
        },
        {
            nombre: 'Differin Adapalene 0.1%',
            cantidad: 30,
            valor: 134100,
            categoria: "POTENCIADOR",
            foto: "adapaleno",
            tiempo: "N",
            turno: 15,
            alert: "SOLO DOS VECES POR SEMANA",
            replace: 24,
            calidad: 'P',
            configuraciones: ['G-RA.TCM.-N', 'G-RA.HS.A.-N', 'G-RA.HS.TCM.-N', 'G-RA.A.TCM.-N', 'M-RA.A.-N']
        },
        {
            nombre: 'The Ordinary Retinol 0.2% in Squalane',
            cantidad: 30,
            valor: 73500,
            categoria: "POTENCIADOR",
            foto: "to-retinol",
            tiempo: "N",
            turno: 15,
            alert: "SOLO UNA VEZ POR SEMANA",
            replace: 26,
            calidad: 'P',
            configuraciones: ['G-RA.HS.TCM.-S', 'G-RA.A.TCM.-S', 'G-HS.A.TCM.-S', 'G-RA.HS.A.TCM.-S']
        },
        {
            nombre: 'Ácido Láctico 10% de The Ordinary',
            cantidad: 30,
            valor: 93000,
            categoria: "POTENCIADOR",
            foto: "to-lactic",
            tiempo: "N",
            turno: 15,
            alert: "SOLO DOS VECES POR SEMANA",
            replace: 38,
            calidad: 'P',
            configuraciones: ['M-HS.TCM.-S', 'S-TCM.-N', 'S-TCM.-S', 'S-HS.TCM.-N', 'S-A.TCM.-S', 'S-RA.HS.A.-S', 'S-RA.HS.TCM.-N', 'S-RA.HS.TCM.-S', 'S-RA.A.TCM.-S', 'S-HS.A.TCM.-S', 'S-RA.HS.A.TCM.-S']
        },
        {
            nombre: 'The Ordinary Ácido Glicólico 7% Toning Solution',
            cantidad: 240,
            valor: 122300,
            categoria: "POTENCIADOR",
            foto: "to-glycolyc",
            tiempo: "N",
            turno: 15,
            alert: "DOS VECES POR SEMANA",
            replace: 50,
            calidad: 'P',
            configuraciones: ['S-RA.TCM.-N']
        },
    ]

    window.onload = function () {
        bloquesIntercambiables()
    };
});


