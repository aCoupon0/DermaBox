// Importar las dependencias necesarias
const express = require('express');
const twilio = require('twilio');
const path = require('path');

// Configurar las credenciales de Twilio
const accountSid = 'ACfd63cf95c0de859ab05cb54b8bf5742a'; // Tu Account SID de Twilio
const authToken = '64efe5eda46f2c244aa5c2fe032a9a99'; // Tu Auth Token de Twilio
const client = twilio(accountSid, authToken);

// Crear una instancia de Express
const app = express();
const port = 3000; // Puedes cambiar el puerto si es necesario

// Middleware para analizar el cuerpo JSON de las solicitudes
app.use(express.json());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para verificar que el servidor funciona
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para enviar un mensaje de WhatsApp
app.post('/send-message', (req, res) => {
    // Verificar que los datos se reciban correctamente
    const { actualKit, casoParticular, combinacion, paymentMethod, cobroFinal, datosClientes } = req.body.messageBody; // Obtener el cuerpo de la solicitud

    // Crear y enviar el mensaje de WhatsApp
    client.messages
        .create({
            body: `ActualKit: ${JSON.stringify(actualKit)}\nCaso Particular: ${JSON.stringify(casoParticular)}\nCombinación: ${combinacion}\nMétodo de Pago: ${paymentMethod}\nCobro Total: ${cobroFinal}\nDatos del Cliente: ${datosClientes}`, // Mensaje actualizado con saltos de línea
            from: 'whatsapp:+14155238886', // Número de Twilio para WhatsApp
            to: 'whatsapp:+573058376094' // Tu número de teléfono
        })
        .then(message => {
            console.log(`Mensaje enviado con SID: ${message.sid}`);
            res.send('Mensaje enviado exitosamente');
        })
        .catch(error => {
            console.error('Error al enviar el mensaje:', error);
            res.status(500).send('Error al enviar el mensaje: ' + error.message); // Mensaje de error detallado
        });
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
