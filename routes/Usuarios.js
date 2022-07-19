const router = require('express').Router();
const Database = require('./../config/Database');

router.get("/", async (req, res, next)=>{

    const db = await Database();

    const Usuarios =  await db.collection('Usuarios').find({}).toArray();

    return res.status(200).json({
        msg:"Aqui los Usuarios", 
        status:true, 
        Usuarios,
        Count:Usuarios.length,
       // SuscritosAJorge:Usuarios.filter(el => el.SuscritoA == "Jorge").length
    });
});

module.exports =router;