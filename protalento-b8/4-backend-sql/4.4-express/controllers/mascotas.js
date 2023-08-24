import conexion from "../config/db.js"

const obtenerMascotas = async (req, response) =>{
    // const mascotas = await conexion.query("SELECT * FROM mascotas INNER JOIN clientes ON clientes.id=mascotas.id_cliente")

    const mascotas = await conexion.query("SELECT * FROM mascotas ORDER BY id")
    // console.log(mascotas)

    if(mascotas.rows.length==0)
        response.status(404).json({"error":"404"})
    else
        response.status(200).json(mascotas.rows)

}


const obtenerMascotasSoloNombres = async (req, response) =>{
    const mascotas = await conexion.query("SELECT * FROM mascotas ORDER BY id")
    // console.log(mascotas)
    const respuesta = mascotas.rows.map((mascota)=>mascota.nombre)

    response.status(404).json({rows: respuesta})


}

const obtenerMascota = async (req, response) =>{
    const id = req.params.id // Recuperamos de la URL
    const mascotas = await conexion.query(`SELECT * FROM mascotas WHERE id=${id}`)
    // console.log(mascotas)
    response.json(mascotas.rows) // Equivalente al return
}

const insertarMascota = async (req, response) =>{
    const nombre = req.body.nombre
    const especie = req.body.especie
    const id_cliente = req.body.id_cliente

    const mascota = await conexion.query(`INSERT INTO mascotas(nombre,especie,id_cliente) VALUES('${nombre}','${especie}','${id_cliente}')`)
    // await conexion.query(`INSERT INTO mascotas(nombre,especie,id_cliente) VALUES($1,$2,$3)`, [nombre,especie,id_cliente])

    response.status(200).json({success:mascota.rowCount})

}

const actualizarMascota = async(req, response) => {
    const id = req.params.id
    /*const nombre = req.body.nombre
    const especie = req.body.especie
    const id_cliente = req.body.id_cliente*/
    const {nombre, especie, id_cliente} = req.body

    const sql=`UPDATE mascotas SET nombre='${nombre}', especie='${especie}', id_cliente='${id_cliente}' WHERE id='${id}'`
    const mascota = await conexion.query(sql)

    response.json({success:mascota.rowCount})
}

const borrarMascota = async(req, response) => {
    const id = req.params.id
    const mascota = await conexion.query(`DELETE FROM mascotas WHERE id='${id}'`)
    
    response.json({success:mascota.rowCount})
}



export { obtenerMascotas, obtenerMascota, insertarMascota, actualizarMascota, borrarMascota }