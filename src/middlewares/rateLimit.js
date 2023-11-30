import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 5,
    message: 'You have exceeded your 5 requests per minute limit',
    legacyHeaders: true,
})

export default limiter
