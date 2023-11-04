export class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
    this.status = 400
    this.message = message
    this.stack = new Error().stack
    this.code = 'VALIDATION_ERROR'
    this.errors = []
    this.isOperational = true
    Error.captureStackTrace(this, this.constructor)
  }
}
