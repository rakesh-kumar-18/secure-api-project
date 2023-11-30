import { customError } from '../errors/customError.js'

const errorHandler = (err, req, res, next) => {
    console.error(err)

    if (err instanceof Error) {
        if (err instanceof customError) {
            return res.status(err.status).send({
                name: err.name,
                message: err.message,
                status: err.status,
            })
        }

        const errorStatus = 500
        const errorMessage = err.message || 'Something went wrong'
        return res.status(errorStatus).json({
            name: err.name,
            message: errorMessage,
            status: errorStatus,
        })
    }
}

export default errorHandler
