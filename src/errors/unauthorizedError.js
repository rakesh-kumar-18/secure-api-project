import { customError } from './customError.js'

class unauthorizedError extends customError {
    status = 401
    constructor(message) {
        super(message || 'Unauthorized')
    }
}

export { unauthorizedError }
