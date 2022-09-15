// funcion para crear server http --------------------------

const http = require('http');

const server = http.createServer(function(req, res){
    res.writeHead(200,{'content-type': 'text/plain'});
    res.end(saludo);
});

const portHTTP = 8080;

const saludo = `Hola, este servidor esta creado solo con http`;

const serverHTTP = server.listen(portHTTP, ()=>{
    console.log(`Servidor http escuchando en el puerto ${serverHTTP.address().port}`)
})

// funcion para crear server express  --------------------------

const express = require('express');

const app = express();

const portExpress = 8081;

const serverExpress = app.listen(portExpress, ()=>{
    console.log(`Servidor Express escuchando en el puerto ${serverExpress.address().port}`)
})

serverExpress.on("error", error => console.log(`Error en servidor ${error}`))

// Metodos http ----------------------------------------------

app.get('/productos', (req, res)=>{
    res.send(getProductos())
})
app.get('/productoRandom', (req, res)=>{
    res.send(getProductoRandom())
})

// lectura de archivo --------------------------

const fs = require('fs');
const data = JSON.parse(fs.readFileSync('productos.txt', 'utf-8'));

// obtener todos los productos ------------------------------------
function getProductos() {
    return data
} 
// obtener 1 producto random ------------------------------------
function getProductoRandom() {

    let rand = Math.floor(Math.random() * 5);

    const result = data.filter(data => data.id == rand);

    return result
}
