/* pg es el driver al que nos queremos conectar, en este caso: postgres */
import pg from 'pg'
const { Pool } = pg

const conexion = new Pool({
    host: "localhost",
    user: "postgres",
    password: "root",
    database: "veterinaria",
    port: 5432
})

export default conexion