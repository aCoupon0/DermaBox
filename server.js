// Importar las dependencias necesarias
const express = require('express');
const twilio = require('twilio');
const path = require('path');

// Configurar las credenciales de Twilio
const accountSid = 'ACfd63cf95c0de859ab05cb54b8bf5742a'; // Tu Account SID de Twilio
const authToken = '63f8b16ff60ce1062f3758c80d1ed8db'; // Tu Auth Token de Twilio
const client = twilio(accountSid, authToken);

// Crear una instancia de Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analizar el cuerpo JSON de las solicitudes
app.use(express.json());

// Ruta dinámica para pedidos
app.get("/user/:id", (req, res) => {
    // Sirve siempre el mismo archivo HTML
    res.sendFile(path.join(__dirname, "public/pedidos.html"));
});

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para verificar que el servidor funciona
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para enviar un mensaje de WhatsApp
app.post('/send-message', (req, res) => {
    const { actualKit, casoParticular, combinacion, paymentMethod, cobroFinal, datosClientes, fechaLLegada } = req.body.messageBody;

    // Crear el mensaje de WhatsApp con los datos recibidos
    const messageBody = [
        actualKit,               // Primera posición: arreglo con actualKit
        datosClientes,           // Segunda posición: arreglo con datos del cliente
        "",                        // Tercera posición: un string vacío
        cobroFinal,                // Cuarta posición: cobroFinal
        paymentMethod              // Quinta posición: paymentMethod
    ];

    // Agregar las variables fuera del arreglo
    const finalMessage = JSON.stringify([messageBody, casoParticular, fechaLLegada]);

    // Crear y enviar el mensaje de WhatsApp
    client.messages
        .create({
            body: finalMessage,  // El cuerpo del mensaje es el arreglo estructurado
            from: 'whatsapp:+14155238886', // Número de Twilio para WhatsApp
            to: 'whatsapp:+573058376094'   // Tu número de teléfono
        })
        .then(message => {
            res.status(200).send('Mensaje enviado correctamente');
        })
        .catch(error => {
            res.status(500).send('Error al enviar el mensaje');
        });
});

app.post('/send-second-order', (req, res) => {
    let { messageBody } = req.body;

    // Convertimos el arreglo en una cadena formateada
    const formattedMessage = JSON.stringify(messageBody, null, 2);

    client.messages
        .create({
            body: formattedMessage,
            from: 'whatsapp:+14155238886', // Número de Twilio para WhatsApp
            to: 'whatsapp:+573058376094'   // Tu número de teléfono
        })
        .then(message => {
            res.status(200).send('Mensaje enviado correctamente');
        })
        .catch(error => {
            res.status(500).send('Error al enviar el mensaje');
        });
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
