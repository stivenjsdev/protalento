import conexion from '../config/db.js'

const getClientes = async (request,response) =>{
    const clientes = await conexion.query("SELECT * FROM clientes ORDER BY id")
    response.json(clientes.rows)
}

const insertCliente = async(request, response) =>{
    const {nombre, direccion, telefono} = request.body
    const cliente = await conexion.query(`INSERT INTO clientes(nombre,direccion,telefono) VALUES('${nombre}','${direccion}','${telefono}')`)
    
    response.json({success:cliente.rowCount})

}

const updateCliente = async(request, response) =>{
    const id = request.params.id
    const {nombre, direccion, telefono} = request.body
    const cliente = await conexion.query(`UPDATE clientes SET nombre='${nombre}', direccion='${direccion}', telefono='${telefono}' WHERE id='${id}'`)
    
    response.json({success:cliente.rowCount})
}

const deleteCliente = async(request, response) =>{
    const id = request.params.id
    const cliente = await conexion.query(`DELETE FROM clientes WHERE id='${id}'`)
    
    response.json({success:cliente.rowCount})
}

export {getClientes, insertCliente, updateCliente, deleteCliente}