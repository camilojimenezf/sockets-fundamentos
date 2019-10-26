const {io} = require('../server');


io.on('connection', (client)=>{

    console.log('Usuario conectado');

    // Enviar mensaje al cliente
    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data,callback)=>{
        console.log(data);

        client.broadcast.emit('enviarMensaje', data); //Enviamos el mensaje recibido desde un cliente a todos los clientes

        // if(mensaje.usuario){
        //     callback({
        //         resp:'TODO SALIO BIEN!'
        //     });
        // }else{
        //     callback({
        //         resp:'TODO SALIO MAL!'
        //     });
        // }

    });

});