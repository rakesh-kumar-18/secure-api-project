import { customError } from './customError.js'

class badRequestError extends customError {
    status = 401
    constructor(message) {
        super({ message } || 'Invalid username or password')
    }
}

export { badRequestError }
