class customError extends Error {
    status

    constructor(message) {
        super()

        Error.captureStackTrace(this, this.constructor)

        this.name = this.constructor.name
        this.message = message || 'Something went wrong. Please try again.'
    }
}

export { customError }
