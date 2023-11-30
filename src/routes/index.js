import express from 'express'
import userRouter from './users/index.js'

const apiRouter = express.Router()

apiRouter.use('/api', userRouter)

export default apiRouter
