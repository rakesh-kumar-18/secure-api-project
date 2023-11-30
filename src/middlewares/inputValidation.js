import { validationResult } from 'express-validator'
import { invalidInputError } from '../errors/invalidinputerror'

// Middleware for handling validation errors
export const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg)
        const error = new invalidInputError({ message: errorMessages[0] })
        return res.status(400).send({ ...error })
    }

    next()
}
