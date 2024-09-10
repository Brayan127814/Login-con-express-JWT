import { getfindUserByEmail } from "../models/authModels.mjs";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'



//clave secreta 
const secretKey = 'Brayan#16'


export async function loginSesion(req, res) {

    try {
        //Obtener los valores 
        const { email, password } = req.body
        //Validar que los campos sean validos
        if (!email || !password) {
            return res.status(403).json({ mensje: 'Los campos passwors y email son requeridos' })
        }
        //obtener la respuesta se la peticion al servidor
        const user = await getfindUserByEmail(email)
        if (!user) {

            return res.status(401).json({ mensaje: 'Credenciales incorrectas' })

        }

        //comparar contraseñas para el inicio de sesion
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ mensaje: 'Credenciales incorrectas' })
        }

        // crear token 
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, secretKey, { expiresIn: '1h' })

        res.status(200).json({ success: true, token })
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        if (!res.headersSent) { // Verifica si los encabezados ya han sido enviados
            return res.status(500).json({ mensaje: 'Error interno en el servidor' });
        }
    }

}