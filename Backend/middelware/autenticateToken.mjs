import jwt from 'jsonwebtoken'
const secretKey = 'Brayan#16'


export async function authenticateToken(req, res, next) {

    //obtener el encavezado de autenticacion
    const authHeade = req.headers['authorization']
    //extraer el token
    const token = authHeade && authHeade.split(' ')[1]
    if (!token) {
        return res.status(401).json({ mensaje: 'Token no proporcionado' })
    }

    //verificar Token
    jwt.verify(token,secretKey,(err,user)=>{
        if(err){
            return res.status(403).json({ menssaje: 'token no valido' })
        }
        req.user= user
        next()
    })

}