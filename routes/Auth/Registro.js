const router =  require('express').Router();


router.post("/", (req, res, next)=>{

    const { usuario, password, email } = req.body;
   // const usuario =  req.body.usuario; destructuracion de un objeto;
    console.log(
        usuario,
        password, 
        email
    )
    if( 
        !usuario  || usuario.length  <= 4 ||
        !password || password.length <= 4 || 
        !email    || email.length    <= 4 
     ){
       return res.status(404).json({
        msg: "algo ha salido mal",
        status:false
    })
     }

     //validar en base de datos
     //insertar en base de datos

     return res.status(200).json({
        msg:"Se ha insertado el nuevo usuario, por favor vaya al login",
        status:true
    })

});



module.exports = router;