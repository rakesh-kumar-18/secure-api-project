import { customError } from './customError.js'

class invalidInputError extends customError {
    status = 400
    constructor(message) {
        super({ message })
    }
}

export { invalidInputError }
