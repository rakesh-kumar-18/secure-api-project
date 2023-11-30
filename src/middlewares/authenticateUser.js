import 'dotenv/config'
import { unauthorizedError } from '../errors/unauthorizedError.js'
import jwt from 'jsonwebtoken'

export const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization?.replace('Bearer ', '')

    if (!token) {
        return next(new unauthorizedError('Unauthorized'))
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY)

        req.userId = decoded.userId

        next()
    } catch (error) {
        next(error)
    }
}
