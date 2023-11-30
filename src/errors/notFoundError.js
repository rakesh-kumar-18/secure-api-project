import { customError } from './customError.js'

class notFoundError extends customError {
    status = 404
    constructor(message) {
        super(message || 'User not found')
    }
}

export { notFoundError }
