import { createRegistered, getRegister, getRegisterByEmail } from "../controller/authUserController.mjs";
import { Router } from 'express'
import { loginSesion } from "../middelware/authcontrol.mjs";
import { authenticateToken } from "../middelware/autenticateToken.mjs";
const route = Router()


route.post('/register',createRegistered)
route.post('/login',loginSesion)
route.get('/',getRegister)
route.get('/:email',authenticateToken,getRegisterByEmail)

export default route