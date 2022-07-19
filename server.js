const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const http = require('http');

const app =  express();
app.use(cors({
    credentials:true,
    origin:"*"
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const home = require("./routes");
const Registro = require("./routes/Auth/Registro");
const Usuarios = require("./routes/Usuarios");


app.use("/",home);
app.use("/Registro", Registro);
app.use("/Usuarios", Usuarios);

const server = http.createServer(app);


server.listen(
    3001
    ,
    ()=> {
        console.log( `Escuchando en http://localhost:3001`)
    }
)


