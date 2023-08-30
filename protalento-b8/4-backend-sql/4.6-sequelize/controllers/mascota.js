const models = require("../models")

const getMascotas = async(req,res) =>{
    const Mascota = models.Mascota
    // raw query
    // const mascotas = await sequelize.query("SELECT * FROM `mascotas`");
    const mascotas = await Mascota.findAll()
    res.json(mascotas)
}

const insertMascota = async(req,res) =>{
    const Mascota = models.Mascota

    const nombre = req.body.nombre
    const especie = req.body.especie
    const id_client = req.body.id_client

    /* INSERT INTO VALUES($nombre, $especie, $id_client)*/
    const mascota = await Mascota.create({
        "especie": especie,
        "nombre": nombre,
        "id_client": id_client
    })

    res.json(mascota)
}


const updateMascota = async(req,res) =>{
    const Mascota = models.Mascota
    const id = req.params.id

    const nombre = req.body.nombre
    const especie = req.body.especie
    const id_client = req.body.id_client

    /** SELECT * FROM mascotas WHERE id = $id */
    const mascota = await Mascota.findOne({
        where: {
            "id": id
        }
    })

    /** UPDATE mascotas SET nombre = $nombre, especie = $especie, id_client= $id_client */
    mascota.nombre = nombre
    mascota.especie = especie
    mascota.id_client = id_client

    await mascota.save()

    res.json(mascota)
}

const deleteMascota = async(req,res)=>{
    const Mascota = models.Mascota
    const id = req.params.id

    /** DELETE FROM mascotas where id = $id */
    const mascota = await Mascota.destroy({
        where:{
            "id":id
        }
    })

    res.json(mascota)
}

module.exports = { getMascotas, insertMascota, updateMascota, deleteMascota }