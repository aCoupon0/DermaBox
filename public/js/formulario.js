// Obtener el arreglo actualKit del localStorage
const actualKit = JSON.parse(localStorage.getItem('actualKit')) || [];

function precargarImagenes() {
    actualKit.forEach(producto => {
        const img = new Image();
        img.src = `assets/productos/${producto.foto}.webp`;
    });
}

// Función para renderizar la lista
function renderProductList() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar el contenido antes de volver a renderizar

    actualKit.forEach((producto, index) => {
        // Crear un contenedor para cada producto
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');

        // Añadir clases de estilo específicas para el primer y último elemento
        if (index === 0) {
            productDiv.classList.add('first-item'); // Estilo para el primer elemento
        }
        if (index === actualKit.length - 1) {
            productDiv.classList.add('last-item'); // Estilo para el último elemento
        }

        // Formatear el valor con separadores de miles
        const valorFormateado = producto.valor.toLocaleString('es-ES');

        // Mostrar el nombre, cantidad, valor y categoría
        productDiv.innerHTML = `
        <div class='zona-foto'>
            <img src="assets/productos/${producto.foto}.webp" loading="lazy">
        </div>
        <div class='zona-info'>
            <div class="bloque-1">
                <div class="producto-container">
                    <p class="tipo-producto">${producto.categoria}</p>
                </div>
                
                ${(producto.categoria === 'BLOQUEADOR' || producto.categoria === 'POTENCIADOR' || producto.categoria === 'LIMPIADOR' || producto.categoria === 'HIDRATANTE')
                ? `<button class="delete-btn" onclick="eliminarProducto(${index})"><i class="fas fa-trash-alt"></i></button>`
                : ''
            }
            <button class="replace-btn" onclick="reemplazarProducto(${index})">
                    <i class="fas fa-retweet"></i>
            </button>
            </div>
            <div class="bloque-2">
                <p>${producto.nombre}</p>
            </div>
            <div class="bloque-3">
                <div class="bloque-3-1">
                    <p class="cantidad">${producto.cantidad}ml</p>
                </div>
                <div class="bloque-3-2">
                    <p class="valor"><span style="font-size: 0.9rem; margin-right: 2vw;">$</span>${valorFormateado}</p>
                </div>
            </div>
        </div>
        `;

        productList.appendChild(productDiv);

    });

    // Calcular y mostrar el precio total y el costo de envío
    calcularTotalYEnvio();
}

// Función para calcular y mostrar el total y el costo de envío
function calcularTotalYEnvio() {
    const totalPrecioElement = document.querySelector('.precio');
    const envioElement = document.querySelector('.envio');
    const cobroFinal = document.querySelector('.cobro-final');

    // Calcular el total sumando los valores de los productos
    let total = actualKit.reduce((acc, producto) => acc + producto.valor, 0);

    // Calcular el costo de envío
    let costoEnvio = 0;
    if (actualKit.length > 2) {
        envioElement.innerText = 'ENVÍO GRATIS';
    } else if (actualKit.length === 2) {
        costoEnvio = 6000;
        envioElement.innerHTML = `Envío <span style="font-size: 0.9rem;  color: white">$</span> 6.000`;
    } else if (actualKit.length === 1){
        costoEnvio = 9000
        envioElement.innerHTML = `Envío <span style="font-size: 0.9rem;  color: white">$</span> 9.000`;
    } else {
        costoEnvio = 0
        envioElement.innerHTML = ``;
    }

    // Mostrar el total formateado con el símbolo $ dentro de un span con estilos en línea
    totalPrecioElement.innerHTML = `<span style="font-size: 0.9rem; margin-right: 2vw;">$</span>${total.toLocaleString('es-ES')}`;
    cobroFinal.innerHTML = ((total) + (costoEnvio)).toLocaleString('es-ES')
}

// Función para eliminar un producto
function eliminarProducto(index) {
    actualKit.splice(index, 1); // Eliminar el elemento del array
    localStorage.setItem('actualKit', JSON.stringify(actualKit)); // Actualizar el localStorage
    renderProductList(); // Volver a renderizar la lista
    renderMorningRoutine();  // Renderiza la rutina de la mañana
    renderNightRoutine();
    updateDurationAndDate()
}

function irAtras() {
    // Obtener 'primerosTres' del localStorage
    const primerosTres = localStorage.getItem('primerosTres');

    // Verificar si primerosTres existe
    if (!primerosTres) {
        console.error('El valor de primerosTres no está disponible en localStorage');
        return; // Salir de la función si no existe
    }

    // Obtener actualKit del localStorage
    let actualKit = JSON.parse(localStorage.getItem('actualKit')) || [];

    // Si escogió uno de todos
    if (actualKit.length === 4) {
        actualKit.pop(); // Eliminar el último elemento

        // Actualizar el actualKit en el localStorage
        localStorage.setItem('actualKit', JSON.stringify(actualKit));

        // Redireccionar a la página correspondiente
        window.location.href = `../potenciador.html`;
    } else if (actualKit.length === 3) {
        if (actualKit[actualKit.length - 1].categoria === "POTENCIADOR") {
            actualKit.pop();
            localStorage.setItem('actualKit', JSON.stringify(actualKit));
            window.location.href = `../potenciador.html`;
        } else if (actualKit[actualKit.length - 1].categoria === "BLOQUEADOR") {
            window.location.href = `../potenciador.html`;
        }
    } else {
        window.location.href = `../potenciador.html`;
    }
}

function obtenerFechaDosMesesDespues() {
    const fechaActual = new Date();

    // Sumar dos meses a la fecha actual
    fechaActual.setMonth(fechaActual.getMonth() + 2);

    // Obtener el día y el mes
    const dia = fechaActual.getDate();
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const mes = meses[fechaActual.getMonth()];

    // Formato final
    return `${dia} de ${mes}`;
}

// Función para asignar la fecha al <p> con clase "duration-txt-2"
function actualizarFecha() {
    const fechaFormateada = obtenerFechaDosMesesDespues();
    const elementoFecha = document.querySelector('.duration-txt-2');

    // Asignar la fecha al elemento
    if (elementoFecha) {
        elementoFecha.textContent = fechaFormateada;
    }
}

function renderMorningRoutine() {
    const morningRoutineDiv = document.querySelector('.morning-routine');
    morningRoutineDiv.innerHTML = ''; // Limpiar el contenido antes de renderizar

    // Crear el contenedor del título "POR LA MAÑANA" con la imagen del sol
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('routine-morning-title'); // Añadimos una clase para aplicarle estilo

    // Crear la imagen del sol
    const imgSol = document.createElement('img');
    imgSol.src = '../assets/sol.webp'; // Ruta de la imagen (asegúrate de que sea correcta)
    imgSol.alt = 'Sol'; // Texto alternativo para la imagen
    imgSol.classList.add('sun-image'); // Clase para el estilo de la imagen

    // Crear el texto "POR LA MAÑANA"
    const textTitle = document.createElement('p');
    textTitle.textContent = 'POR LA MAÑANA';
    textTitle.classList.add('morning-title-text'); // Clase para el estilo del texto

    // Añadir la imagen y el texto al div
    titleDiv.appendChild(imgSol);
    titleDiv.appendChild(textTitle);

    // Añadir el contenedor de título al div principal
    morningRoutineDiv.appendChild(titleDiv);

    // Ordenar actualKit según la propiedad 'turno'
    const actualKitOrdenado = [...actualKit].sort((a, b) => a.turno - b.turno);

    // Filtrar los productos que tienen 'M' o 'MN' en la propiedad 'tiempo'
    const productosMorning = actualKitOrdenado.filter(producto => producto.tiempo === 'M' || producto.tiempo === 'MN');

    if (productosMorning.length === 0) {
        const descansoP = document.createElement('p');
        descansoP.classList.add('descanso-mañana');
        descansoP.innerHTML = 'Limpiar con agua tibia <br>será suficiente';
        morningRoutineDiv.appendChild(descansoP);
        return; // Salir de la función
    }

    const tieneLimpiador = productosMorning.some(producto => producto.categoria === 'LIMPIADOR');

    // Si no hay productos con categoría "LIMPIADOR", agregar el mensaje de agua tibia
    if (!tieneLimpiador) {
        const aguaTibiaDiv = document.createElement('div');
        aguaTibiaDiv.classList.add('agua-tibia'); // Clase para aplicar estilo al div

        const aguaTibiaP = document.createElement('p');
        aguaTibiaP.textContent = 'Por las mañanas límpiate solo con agua tibia.';

        // Añadir el p al div
        aguaTibiaDiv.appendChild(aguaTibiaP);

        // Añadir el div al contenedor principal antes de los productos
        morningRoutineDiv.appendChild(aguaTibiaDiv);
    }

    // Renderizar los productos filtrados
    const orden = ['PRIMERO', 'SEGUNDO', 'TERCERO', 'CUARTO', 'QUINTO'];
    let inicioIndex = tieneLimpiador ? 0 : 1; // Si no hay limpiador, el índice inicial será 1 (SEGUNDO)

    productosMorning.forEach((producto, index) => {
        // Crear un contenedor para cada producto
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item-2');

        // Texto que indica el orden de los productos
        const ordenTexto = orden[index + inicioIndex] || `${index + 1 + inicioIndex}º`;

        // Renderizar el texto de orden
        const ordenP = document.createElement('p');
        ordenP.classList.add('orden-producto');
        ordenP.textContent = ordenTexto;
        productDiv.appendChild(ordenP);

        // Mostrar la categoría del producto
        const categoriaP = document.createElement('p');
        categoriaP.classList.add('categoria-producto'); // Clase para el estilo de la categoría
        categoriaP.textContent = producto.categoria; // Asegúrate de que "categoria" existe en el objeto producto
        productDiv.appendChild(categoriaP);

        // Mostrar solo el nombre del producto
        const nombreP = document.createElement('p');
        nombreP.classList.add('nombre-producto');
        nombreP.textContent = producto.nombre;
        productDiv.appendChild(nombreP);

        // Si el producto tiene un 'alert' no vacío, mostrarlo debajo del nombre
        if (producto.alert !== '') {
            const alertP = document.createElement('p');
            alertP.classList.add('alert-message');
            alertP.textContent = producto.alert;
            productDiv.appendChild(alertP);
        }

        // Añadir el producto al contenedor de morning-routine
        morningRoutineDiv.appendChild(productDiv);

        // Añadir el separador si no es el último producto
        if (index < productosMorning.length - 1) {
            const separadorDiv = document.createElement('div');
            separadorDiv.classList.add('separador-routine');
            morningRoutineDiv.appendChild(separadorDiv);
        }
    });
}

function renderNightRoutine() {
    const nightRoutineDiv = document.querySelector('.night-routine');
    nightRoutineDiv.innerHTML = ''; // Limpiar el contenido antes de renderizar

    // Crear el contenedor del título "POR LA NOCHE" con la imagen de la luna
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('routine-night-title'); // Reutilizamos la clase para aplicar el mismo estilo

    // Crear la imagen de la luna
    const imgLuna = document.createElement('img');
    imgLuna.src = '../assets/luna.webp'; // Ruta de la imagen de la luna
    imgLuna.alt = 'Luna'; // Texto alternativo para la imagen
    imgLuna.classList.add('sun-image'); // Reutilizamos la clase de la imagen para mantener los estilos

    // Crear el texto "POR LA NOCHE"
    const textTitle = document.createElement('p');
    textTitle.textContent = 'POR LA NOCHE';
    textTitle.classList.add('morning-title-text'); // Reutilizamos el estilo del texto

    // Añadir la imagen y el texto al div del título
    titleDiv.appendChild(imgLuna);
    titleDiv.appendChild(textTitle);

    // Añadir el contenedor de título al div principal
    nightRoutineDiv.appendChild(titleDiv);

    const makeupDiv = document.createElement('div');
    makeupDiv.classList.add('makeup'); // Clase para personalizar estilos
    makeupDiv.textContent = 'Si te maquillas, retíralo como normalmente lo haces antes de aplicar la rutina.';
    nightRoutineDiv.appendChild(makeupDiv); // Añadir el contenedor al div principal

    // Ordenar actualKit según la propiedad 'turno'
    const actualKitOrdenado = [...actualKit].sort((a, b) => a.turno - b.turno);

    // Filtrar los productos que tienen 'N' o 'MN' en la propiedad 'tiempo'
    const productosNight = actualKitOrdenado.filter(producto => producto.tiempo === 'N' || producto.tiempo === 'MN');

    if (productosNight.length === 0) {
        // Si no hay productos con tiempo 'M' o 'MN', mostrar el mensaje "Por la mañana puedes descansar"
        const descansoN = document.createElement('p');
        descansoN.classList.add('descanso-noche');
        descansoN.innerHTML = 'Por la noche puedes <br>descansar...';
        nightRoutineDiv.appendChild(descansoN);
        return; // Salir de la función
    }

    // Renderizar los productos filtrados
    productosNight.forEach((producto, index) => {
        // Crear un contenedor para cada producto
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item-2');

        // Texto que indica el orden de los productos (PRIMERO, SEGUNDO, etc.)
        const orden = ['PRIMERO', 'SEGUNDO', 'TERCERO', 'CUARTO', 'QUINTO'];
        const ordenTexto = orden[index] || `${index + 1}º`;

        // Renderizar el texto de orden
        const ordenP = document.createElement('p');
        ordenP.classList.add('orden-producto');
        ordenP.textContent = ordenTexto;
        productDiv.appendChild(ordenP);

        // Mostrar la categoría del producto
        const categoriaP = document.createElement('p');
        categoriaP.classList.add('categoria-producto'); // Clase para el estilo de la categoría
        categoriaP.textContent = producto.categoria; // Asegúrate de que "categoria" existe en el objeto producto
        productDiv.appendChild(categoriaP);

        // Mostrar solo el nombre del producto
        const nombreP = document.createElement('p');
        nombreP.classList.add('nombre-producto');
        nombreP.textContent = producto.nombre;
        productDiv.appendChild(nombreP);

        // Si el producto tiene un 'alert' no vacío, mostrarlo debajo del nombre
        if (producto.alert !== '') {
            const alertP = document.createElement('p');
            alertP.classList.add('alert-message');
            alertP.textContent = producto.alert;
            productDiv.appendChild(alertP);
        }

        // Añadir el producto al contenedor de night-routine
        nightRoutineDiv.appendChild(productDiv);

        // Añadir el separador si no es el último producto
        if (index < productosNight.length - 1) {
            const separadorDiv = document.createElement('div');
            separadorDiv.classList.add('separador-routine');
            nightRoutineDiv.appendChild(separadorDiv);
        }
    });
}

function reemplazarProducto(index) {
    const productoSeleccionado = actualKit[index]
    if (productoSeleccionado && typeof productoSeleccionado.replace === 'number') {
        // Obtener el índice de reemplazo del producto seleccionado
        const indexToReplace = productoSeleccionado.replace;

        // Verificar si el índice de reemplazo es válido en replaceData
        if (replaceData[indexToReplace]) {
            // Reemplazar el producto en actualKit por el producto de replaceData
            actualKit[index] = replaceData[indexToReplace];

            // Guardar el nuevo actualKit en el localStorage
            localStorage.setItem('actualKit', JSON.stringify(actualKit));

            precargarImagenes()
            renderProductList();  // Renderiza la lista de productos
            renderMorningRoutine();  // Renderiza la rutina de la mañana
            renderNightRoutine();
            updateDurationAndDate()
        } else {
            alert('El índice de reemplazo no es válido en replaceData.');
        }
    } else {
        alert(JSON.stringify(productoSeleccionado, null, 2));
    }
}

document.querySelector('.purchase-btn').addEventListener('click', function () {
    if (actualKit.length === 0) {
        alert('Por favor selecciona al menos un producto')
    } else {
        const modal = document.getElementById('confirmation-modal');
        modal.classList.add('show');
        modal.classList.remove('hidden');
    };
});

function cerrarModal() {
    const modal = document.getElementById('confirmation-modal');
    modal.classList.add('hidden');
    modal.classList.remove('show');
}

let paymentMethod = '';

function selectOption(option) {
    // Limpiar selección previa
    document.getElementById('contraentrega').classList.remove('selected');
    document.getElementById('nequi').classList.remove('selected');

    // Marcar la opción seleccionada
    if (option === 'c') {
        document.getElementById('contraentrega').classList.add('selected');
        paymentMethod = 'c'; // Contraentrega
    } else if (option === 'n') {
        document.getElementById('nequi').classList.add('selected');
        paymentMethod = 'n'; // Nequi
    }
}

function envioFormulario() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const city = document.getElementById('city').value.trim();
    const address = document.getElementById('address').value.trim();
    const cobroFinal = document.querySelector('.cobro-final');
    const fechaLLegada = document.querySelector(".duration-2").innerHTML;

    // Verificar que los inputs no estén vacíos y que tengan una longitud mínima
    if (!name || name.length < 5 || !phone || phone.length < 5 || 
        !city || city.length < 5 || !address || address.length < 5) {
        alert('Por favor, rellena todos los campos.');
        return;
    }

    // Crear el string datosClientes con los valores de los inputs
    const datosClientes = `${name}, ${phone}, ${city}, ${address}`;

    // Preparar los datos para enviar al servidor
    const actualKit = JSON.parse(localStorage.getItem('actualKit'));
    const casoParticular = JSON.parse(localStorage.getItem('casoParticular'));

    let combinacion = '';

    // Generar la combinación
    if (actualKit && actualKit.length > 0) {
        combinacion += actualKit[0].calidad + '-' + actualKit[1].calidad; // Primeros dos sin condiciones

        if (actualKit.length === 2) {
            combinacion += '-N-N'; // Rellenar con N
        } else if (actualKit.length === 3) {
            combinacion += '-' + (actualKit[2].categoria === 'BLOQUEADOR' ? actualKit[2].calidad : 'N') + '-' + (actualKit[2].categoria === 'POTENCIADOR' ? actualKit[2].calidad : 'N');
        } else if (actualKit.length > 3) {
            // Agregar más lógica según sea necesario
        }
    }

    // Crear un arreglo solo con los nombres de cada objeto en actualKit
    const actualKitPodada = actualKit.map(({ cantidad, valor, foto, replace, calidad, configuraciones, ...rest }) => rest);

    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            messageBody: {
                actualKit: actualKitPodada,  // Solo los nombres del actualKit
                casoParticular: casoParticular,
                combinacion: combinacion,
                paymentMethod: paymentMethod,
                cobroFinal: cobroFinal ? cobroFinal.textContent : null,
                datosClientes: datosClientes,  // Enviar el string datosClientes
                fechaLLegada: fechaLLegada
            }
        }),
    })
    .then(response => {
        if (response.ok) {  // Verifica si la respuesta fue exitosa
            window.location.href = 'confirmacion.html';  // Redirige a confirmación.html
        } else {
            throw new Error('Error en el envío del mensaje');  // Lanza un error si no fue exitoso
        }
    })
    .catch(error => {
        alert('Por favor, vuelve a intentarlo: ' + error.message);  // Mostrar error
    });
}

const replaceData = [
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
        calidad: 'E'
    },
    {
        nombre: 'Smoothing SA Cleanser de CeraVe',
        cantidad: 237,
        valor: 83200,
        categoria: "LIMPIADOR",
        foto: "renewing",
        tiempo: "MN",
        turno: 10,
        alert: "",
        replace: 0,
        calidad: 'P'
    },

    //HIDRATANTES
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
        calidad: 'E'
    },
    {
        nombre: 'Neutrogena Hydroboost',
        cantidad: 50,
        valor: 79700,
        categoria: "HIDRATANTE",
        foto: "neutrogena-2",
        tiempo: "N",
        turno: 20,
        alert: "",
        replace: 2,
        calidad: 'P'
    },

    //BLOQUEADORES
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
        calidad: 'E'
    },
    {
        nombre: 'Eucerin Oil Control FPS+50',
        cantidad: 50,
        valor: 112500,
        categoria: "BLOQUEADOR",
        foto: "eucerin",
        tiempo: "M",
        turno: 30,
        alert: "",
        replace: 4,
        calidad: 'P'
    },

    //POTENCIADORES
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
        calidad: 'E'
    },
    {
        nombre: 'Differin Adapalene 0.1%',
        cantidad: 30,
        valor: 134500,
        categoria: "POTENCIADOR",
        foto: "adapaleno",
        tiempo: "N",
        turno: 15,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 6,
        calidad: 'P'
    },

    //ENTRE TONICO CENTELLA Y FACIAL PM
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
        calidad: 'E'
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
        calidad: 'P'
    },

    //ENTRE serum nia. bioaqua Y serum nia. the ordinary
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
        calidad: 'E'
    },
    {
        nombre: 'The Ordinary Niacinamida 10% + Zinc 1%',
        cantidad: 30,
        valor: 78500,
        categoria: "POTENCIADOR",
        foto: "to-niacinamida",
        tiempo: "N",
        turno: 15,
        alert: "DÍA DE POR MEDIO",
        replace: 10,
        calidad: 'P'
    },

    //ENTRE espuma 4 en 1 Y roche-posay effaclar
    {
        nombre: 'Espuma 4 en 1 de Carvenchy',
        cantidad: 120,
        valor: 29900,
        categoria: "LIMPIADOR",
        foto: "espuma",
        tiempo: "N",
        turno: 10,
        alert: "",
        replace: 13,
        calidad: 'E'
    },
    {
        nombre: 'La Roche-Posay Effaclar Puryfing',
        cantidad: 200,
        valor: 115200,
        categoria: "LIMPIADOR",
        foto: "effaclar",
        tiempo: "N",
        turno: 10,
        alert: "",
        replace: 12,
        calidad: 'P'
    },

    //ENTRE SERUMs DE HIALURONICOS
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
        calidad: 'E'
    },
    {
        nombre: 'Sérum Hialurónico 2% + B5 The Ordinary',
        cantidad: 30,
        valor: 87400,
        categoria: "POTENCIADOR",
        foto: "to-hialuronico",
        tiempo: "N",
        turno: 40,
        alert: "",
        replace: 14,
        calidad: 'P'
    },

    //ENTRE SERUMs DE RETINOL
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
    },
    {
        nombre: 'The Ordinary Retinol 0.2% in Squalane',
        cantidad: 30,
        valor: 108500,
        categoria: "POTENCIADOR",
        foto: "to-retinol",
        tiempo: "N",
        turno: 15,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 16,
        calidad: 'P'
    },

    //ENTRE VITAMINAS Cs
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
        calidad: 'E'
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
        calidad: 'P'
    },

    //ENTRE ÁCIDOS GLICÓLICOS
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
        calidad: 'E'
    },
    {
        nombre: 'The Ordinary Ácido Glicólico 7% Toning Solution',
        cantidad: 240,
        valor: 133500,
        categoria: "POTENCIADOR",
        foto: "to-glycolyc",
        tiempo: "N",
        turno: 15,
        alert: "DÍA DE POR MEDIO",
        replace: 20,
        calidad: 'P'
    },

    //ENTRE ÁCIDOS GLICÓLICO Y diferrin
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
        calidad: 'E'
    },
    {
        nombre: 'Differin Adapalene 0.1%',
        cantidad: 30,
        valor: 134500,
        categoria: "POTENCIADOR",
        foto: "adapaleno",
        tiempo: "N",
        turno: 15,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 22,
        calidad: 'P'
    },

    //ENTRE retinol y adapaleno
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
        calidad: 'E'
    },
    {
        nombre: 'Differin Adapalene 0.1%',
        cantidad: 30,
        valor: 134500,
        categoria: "POTENCIADOR",
        foto: "adapaleno",
        tiempo: "N",
        turno: 15,
        alert: "SOLO DOS VECES POR SEMANA",
        replace: 24,
        calidad: 'P'
    },

    //ENTRE retinoles en piel sensible (una vez por semana en cambio de dos)
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
        calidad: 'E'
    },
    {
        nombre: 'The Ordinary Retinol 0.2% in Squalane',
        cantidad: 30,
        valor: 108500,
        categoria: "POTENCIADOR",
        foto: "to-retinol",
        tiempo: "N",
        turno: 15,
        alert: "SOLO UNA VEZ POR SEMANA",
        replace: 26,
        calidad: 'P'
    },

    //ENTRE limpiadores en piel sensible (solo por la noche)
    {
        nombre: 'Espuma 4 en 1 de Carvenchy',
        cantidad: 120,
        valor: 29900,
        categoria: "LIMPIADOR",
        foto: "espuma",
        tiempo: "N",
        turno: 10,
        alert: "",
        replace: 29,
        calidad: 'E'
    },
    {
        nombre: 'Smoothing SA Cleanser de CeraVe',
        cantidad: 237,
        valor: 83200,
        categoria: "LIMPIADOR",
        foto: "renewing",
        tiempo: "N",
        turno: 10,
        alert: "",
        replace: 28,
        calidad: 'P'
    },

    //ENTRE TONICO CENTELLA Y FACIAL PM para piel sensible (solo por la noche)
    //ESTE SE REPITE YA EN EL 8 Y 9, ENTONCES POR AHORA SE IGNORA
    {
        nombre: 'Tónico Centella Asiatica',
        cantidad: 120,
        valor: 23500,
        categoria: "HIDRATANTE",
        foto: "centella",
        tiempo: "N",
        turno: 13,
        alert: "",
        replace: 31,
        calidad: 'E'
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
        replace: 30,
        calidad: 'P'
    },

    //ENTRE TONICO SEA FENNEL Y FACIAL PM 
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
        calidad: 'E'
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
        calidad: 'P'
    },

    //ENTRE ESPUMA 4 EN 1 Y HYDRATING CLEANSER (Solo por la noche) 
    {
        nombre: 'Espuma 4 en 1 de Carvenchy',
        cantidad: 120,
        valor: 29900,
        categoria: "LIMPIADOR",
        foto: "espuma",
        tiempo: "N",
        turno: 10,
        alert: "",
        replace: 35,
        calidad: 'E'
    },
    {
        nombre: 'Limpiador Hidratante de CeraVe',
        cantidad: 473,
        valor: 89300,
        categoria: "LIMPIADOR",
        foto: "cerave-hydrating",
        tiempo: "N",
        turno: 10,
        alert: "",
        replace: 34,
        calidad: 'P'
    },

    //ENTRE ESPUMA 4 EN 1 Y HYDRATING CLEANSER (dia y noche) 
    {
        nombre: 'Espuma 4 en 1 de Carvenchy',
        cantidad: 120,
        valor: 29900,
        categoria: "LIMPIADOR",
        foto: "espuma",
        tiempo: "MN",
        turno: 10,
        alert: "",
        replace: 37,
        calidad: 'E'
    },
    {
        nombre: 'Limpiador Hidratante de CeraVe',
        cantidad: 473,
        valor: 89300,
        categoria: "LIMPIADOR",
        foto: "cerave-hydrating",
        tiempo: "MN",
        turno: 10,
        alert: "",
        replace: 36,
        calidad: 'P'
    },

    //ENTRE SERUM DE NIACINAMIDA Y ACIDO LACTICO
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
        calidad: 'E'
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
        calidad: 'P'
    },

    //ENTRE BLOQUEADORES EN PIEL SECA
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
    },
    {
        nombre: 'ISDIN Fusion Water Magic SPF 50',
        cantidad: 50,
        valor: 119500,
        categoria: "BLOQUEADOR",
        foto: "isdin",
        tiempo: "M",
        turno: 30,
        alert: "",
        replace: 40,
        calidad: 'P'
    },


    //ENTRE TONICO CENTELLA Y CREMA CERAVE
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
        calidad: 'E'
    },
    {
        nombre: 'Crema Hidratante de Cerave',
        cantidad: 454,
        valor: 119400,
        categoria: "HIDRATANTE",
        foto: "cerave-cream",
        tiempo: "MN",
        turno: 20,
        alert: "",
        replace: 42,
        calidad: 'P'
    },

    //ENTRE LIMPIADOR MILK Y CERAVE HYDRATING
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
        calidad: 'E'
    },
    {
        nombre: 'Limpiador Hidratante de CeraVe',
        cantidad: 473,
        valor: 89300,
        categoria: "LIMPIADOR",
        foto: "cerave-hydrating",
        tiempo: "N",
        turno: 10,
        alert: "",
        replace: 44,
        calidad: 'P'
    },

    //ENTRE SEA FENNEL Y MOISTURIZING CREAM DE CERAVE
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
        calidad: 'E'
    },
    {
        nombre: 'Crema Hidratante de Cerave',
        cantidad: 454,
        valor: 119400,
        categoria: "HIDRATANTE",
        foto: "cerave-cream",
        tiempo: "MN",
        turno: 20,
        alert: "",
        replace: 46,
        calidad: 'P'
    },


    //ENTRE SEA FENNEL Y NEUTROGENA HYDROBOOST
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
        calidad: 'E'
    },
    {
        nombre: 'Neutrogena Hydroboost',
        cantidad: 50,
        valor: 79700,
        categoria: "HIDRATANTE",
        foto: "neutrogena-2",
        tiempo: "N",
        turno: 20,
        alert: "",
        replace: 48,
        calidad: 'P'
    },

    //ENTRE SERUM NIACINAMIDA Y TONICO GLICOLICO
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
        calidad: 'E'
    },
    {
        nombre: 'The Ordinary Ácido Glicólico 7% Toning Solution',
        cantidad: 240,
        valor: 133500,
        categoria: "POTENCIADOR",
        foto: "to-glycolyc",
        tiempo: "N",
        turno: 15,
        alert: "DÍA DE POR MEDIO",
        replace: 50,
        calidad: 'P'
    },
]

function updateDurationAndDate() {
    if (!actualKit || actualKit.length === 0) {
        console.log("actualKit está vacío o no definido.");
        return;
    }

    const durationData = [
        {
            nombre: 'Espuma 4 en 1 de Carvenchy',
            duration: 2
        },
    
        {
            nombre: 'Limpiador Milk Hidrolizada de Sadoer',
            duration: 2
        },
    
        {
            nombre: 'Smoothing SA Cleanser de CeraVe',
            duration: 2
        },
    
        {
            nombre: 'La Roche-Posay Effaclar Puryfing',
            duration: 2
        },
    
        {
            nombre: 'Limpiador Hidratante de CeraVe',
            duration: 2
        },
    
        {
            nombre: 'Tónico Centella Asiatica',
            duration: 2
        },
    
        {
            nombre: 'Tónico de Hinojo Marino',
            duration: 2
        },
    
        {
            nombre: 'Neutrogena Hydroboost',
            duration: 2
        },
    
        {
            nombre: 'Facial Moisturising Lotion PM',
            duration: 2
        },
    
        {
            nombre: 'Crema Hidratante de Cerave',
            duration: 2
        },
    
        {
            nombre: 'Aloe Vera Sunscreen FPS+60 de Bioaqua',
            duration: 2
        },
    
        {
            nombre: 'Eucerin Oil Control FPS+50',
            duration: 3
        },
    
        {
            nombre: 'ISDIN Fusion Water Magic SPF 50',
            duration: 2
        },
    
        {
            nombre: 'Serum Niacinamida de Bioaqua',
            duration: 2
        },
    
        {
            nombre: 'Sérum Hialurónico de Bioaqua',
            duration: 2
        },
    
        {
            nombre: 'Sérum Retinol de Vibrant Glamoúr',
            duration: 2
        },
    
        {
            nombre: 'Sérum de Vitamina C Bioaqua',
            duration: 2
        },
    
        {
            nombre: 'Pads Ácido Glicólico de Elaimei',
            duration: 2
        },
    
        {
            nombre: 'Differin Adapalene 0.1%',
            duration: 2
        },
    
        {
            nombre: 'The Ordinary Niacinamida 10% + Zinc 1%',
            duration: 3
        },
    
        {
            nombre: 'Sérum Hialurónico 2% + B5 The Ordinary',
            duration: 4
        },
    
        {
            nombre: 'The Ordinary Retinol 0.2% in Squalane',
            duration: 4
        },
    
        {
            nombre: 'CeraVe Skin Renewing Vitamin C Serum',
            duration: 4
        },
    
        {
            nombre: 'The Ordinary Ácido Glicólico 7% Toning Solution',
            duration: 3
        },
    
        {
            nombre: 'Ácido Láctico 10% de The Ordinary',
            duration: 4
        }
    ]
    let durationTime = 0;

    // Recorremos los objetos en actualKit
    actualKit.forEach(item => {
        // Buscamos el objeto correspondiente en durationData
        const matchingItem = durationData.find(data => data.nombre === item.nombre);

        if (matchingItem) {
            // Actualizamos durationTime si es mayor
            durationTime = Math.max(durationTime, matchingItem.duration);
        }
    });
 
    localStorage.setItem('durationTime', durationTime);

    const finalDate = calculateBusinessDaysFromToday(durationTime);

    localStorage.setItem('finalDate', finalDate);

    // Actualizamos el contenido del elemento .duration-2
    const durationElement = document.querySelector('.duration-2');
    if (durationElement) {
        durationElement.innerHTML = finalDate;
    } else {
        console.error("No se encontró el elemento .duration-2");
    }
}

function calculateBusinessDaysFromToday(durationTime) {
    const today = new Date();
    let daysAdded = 0;

    const monthNames = [
        "Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.", 
        "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."
    ];

    while (daysAdded < durationTime) {
        today.setDate(today.getDate() + 1);

        // Si el día no es sábado (6) ni domingo (0), lo contamos como hábil
        if (today.getDay() !== 0 && today.getDay() !== 6) {
            daysAdded++;
        }
    }

    today.setDate(today.getDate() + 1);

    // Formateamos la fecha con día de la semana, día del mes y mes abreviado
    const dayOfWeek = today.toLocaleDateString('es-ES', { weekday: 'long' });
    const day = today.getDate();
    const month = monthNames[today.getMonth()];

    // Construimos la fecha en el formato deseado
    return `${capitalizeFirstLetter(dayOfWeek)}, ${day} de ${month}`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function returnIfZero() {
    if (actualKit .length === 0) {
        window.location.href = 'index.html'; // Redirigir a formulario.html
        return;
    }
}

window.onload = function () {
    returnIfZero()
    renderProductList();  // Renderiza la lista de productos
    actualizarFecha();    // Actualiza la fecha
    renderMorningRoutine();  // Renderiza la rutina de la mañana
    renderNightRoutine();
    updateDurationAndDate()
};

