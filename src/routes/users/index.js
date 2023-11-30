import 'dotenv/config.js'
import express from 'express'
import { prisma } from '../../prismaclient.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { body } from 'express-validator'
import { alreadyExistsError } from '../../errors/alreadyExistError.js'
import { badRequestError } from '../../errors/badRequestError.js'
import { handleValidationErrors } from '../../middlewares/inputValidation.js'

const userRouter = express.Router()

// Route to create a new user
userRouter.post(
    '/users/register',
    [
        body('username')
            .isString()
            .trim()
            .isLength({ min: 3 })
            .withMessage('Username must be at least 3 characters'),
        body('email')
            .isEmail()
            .trim()
            .withMessage('Please enter a valid email address'),
        body('password')
            .isString()
            .trim()
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters'),
        handleValidationErrors,
    ],
    async (req, res, next) => {
        const { username, email, password } = req.body

        try {
            const existingUser = await prisma.user.findFirst({
                where: {
                    OR: [{ username }, { email }],
                },
            })

            if (existingUser) {
                return next(
                    new alreadyExistsError('Username or email is already exist')
                )
            }

            const hashedPassword = await bcrypt.hash(password, 10)

            const newUser = await prisma.user.create({
                data: {
                    username,
                    email,
                    password: hashedPassword,
                },
            })

            res.status(201).json({
                message: 'User registered successfully',
                newUser,
            })
        } catch (error) {
            next(error)
        }
    }
)

// Route for user login
userRouter.post('/users/login', async (req, res, next) => {
    const { username, email, password } = req.body

    try {
        const user = await prisma.user.findUnique({
            where: {
                username,
                email,
            },
        })

        if (!user) {
            return next(new badRequestError('Invalid credentials'))
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            return next(new badRequestError('Invalid credentials'))
        }
        const token = jwt.sign(
            { username: user.username, email: user.email },
            process.env.JWT_KEY,
            { expiresIn: '1h' }
        )
        res.status(200).json({ message: 'Login successful', token })
    } catch (error) {
        next(error)
    }
})

export default userRouter
