import pool from "../config/db.mjs";

//crear un nuevo registro
export async function registerUsers(name, email, password) {

    const [result] = await pool.execute('INSERT INTO users (email,password,name) VALUES ( ?,?,?)',[email, password, name])
    return result.insertId

}
//obtener los registros
export async function getRegistros(params) {
    const [row] = await pool.execute('SELECT * FROM users')
    return row
}

//Busqueda por email para el login
export async function getfindUserByEmail(email) {

    const [rowEmail] = await pool.execute('SELECT * FROM users WHERE email = ? ', [email])
    return rowEmail[0]

}