const router =  require('express').Router();
const Database = require('../../config/Database');

router.post("/", 
async (req, res, next)=>{

    const { usuario, password, email, phone } = req.body;
   // const usuario =  req.body.usuario; destructuracion de un objeto;
 
         //validar en base de datos

    if( 
        !usuario  || usuario.length  <= 4 ||
        !password || password.length <= 4 || 
        !email    || email.length    <= 4 || 
        !phone    

     ){
       return res.status(404).json({
        msg: "algo ha salido mal",
        status:false
    });
    
     }

     //insertar en base de datos
        const db = await Database();// se conecta a base de datos 
        const response =  await  db.collection("Usuarios").insertOne({ usuario, password, email, phone }); // inserta a base de datos
        console.log( response);

     return res.status(200).json({
        msg:"Se ha insertado el nuevo usuario, por favor vaya al login",
        status:true
    })

});



module.exports = router;