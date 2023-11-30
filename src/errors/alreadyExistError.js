import { customError } from './customError.js'

class alreadyExistsError extends customError {
    status = 409
    constructor(message) {
        super({ message })
    }
}

export { alreadyExistsError }
