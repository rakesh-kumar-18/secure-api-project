import express from 'express'
import userRouter from './users'

const apiRouter = express.Router()

apiRouter.use('/api', userRouter)

export default apiRouter
