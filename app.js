import express from 'express'
import morgan from 'morgan'

const PORT = 8000

const app = express()

const json_get = {
    "id": "6197f7d7c1b2af0dccecdca2",
    "name": "Juan",
    "lastname":"Perez",
}

// const logger = (req, res, next) => { 
//     const { method, url } = req

//     console.log(`Se realizo una peticion del metodo ${method} desde la ruta ${url}`)
//     next()
// }

// app.use(logger)

app.use(morgan('dev'))
app.use(express.json())

app.get('/users', (req, res) => {
    res.json(json_get)
})

app.post('/users', (req, res) => {

    const { body } = req

    res.status(201).json({
        "message": "Usuario creado",
        "userInfo": {body}
    })
})

app.listen(PORT, () => {
    console.log(`Se esta ejecutando el servidor ${PORT}`)
})

