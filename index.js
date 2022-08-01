console.clear();

const  { router } = require('./router')

const {bbdd}    = require('./bbdd');

const { user } = require('dotenv').config().parsed

let  express = require('express');
let  app     = express();
let  cors    = require('cors');


app.use(cors()) // Permite aplicar reglas al mandar y recibir datos entre servidores
app.use(express.json()) // Para que todos los datos devueltos sean formato json
app.use(express.urlencoded({extended: false})) // Al enviar datos de un formulario de tipo x-www-urlencoded

app.use(router)


app.listen(PORT, ()=>{
    console.log('Ini api');
})

