import route from "./routes/authRoutes.mjs";
import express from 'express'
import cors from 'cors'


const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/users', route)


app.listen(PORT, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})