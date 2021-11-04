// 1. Importar el module http
import http from 'http';

const server = http.createServer((req,res)=>{
    console.log("> Se ha recibido una peticion.");
    //respondemos
    res.write('Hola');
    // terminar la conexion
    res.end();
});
//
//
server.listen(3000,"192.168.89.40",()=>{
    console.log("Servidor escuchando en http://192.168.89.40:3000");
})
