import { getfindUserByEmail, getRegistros, registerUsers } from "../models/authModels.mjs";
import bcrypt from 'bcrypt'

//Registrar usuario
export async function createRegistered(req, res) {
    try {
        const { email, password, name } = req.body
        //encriptar contraseña
        const hashedPassword = await bcrypt.hash(password, 10)
        const response = await registerUsers(name, email, hashedPassword)

        res.status(200).json({ id: response, name, email })
    } catch (error) {
        console.error('este es el error del servidor', error)
        res.status(500).json({ mensaje: 'Error interno del servidor' })
    }

}
//obtener los registros

export async function getRegister(req, res) {

    try {
        const response = await getRegistros()
        res.status(200).json({ response })
    } catch (error) {
        console.error('este es el error del servidor', error)
        res.status(500).json({ mensaje: 'Error interno del servidor' })
    }

}


export async function getRegisterByEmail(req, res) {

    try {
        const email = req.params.email
        const response = await getfindUserByEmail(email)
        res.status(200).json(response)
    } catch (error) {
        console.error('este es el error del servidor', error)
        res.status(500).json({ mensaje: 'Error interno del servidor' })
    }

}