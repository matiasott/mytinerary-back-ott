import express from "express"
import indexRouter from "./router/indexRouter.js"
import cors from 'cors'

const server = express()

server.use(cors())
server.use(express.json())

const PORT = process.env.PORT

server.use('/api', indexRouter)
server.get('/', (request, response, next) => {
    response.send('Bienvenido a mi servidor')
})

server.listen(3000, () => { console.log('Servidor corriendo en puerto 3000') })