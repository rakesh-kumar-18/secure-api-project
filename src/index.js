import 'dotenv/config.js'
import express from 'express'
import errorHandler from './middlewares/errorHandler.js'
import apiRouter from './routes/index.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(apiRouter)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
