import { z } from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: "Username is required"
    }),
    email: z.string({
        required_error: "Email is required"
    }).email({
        message: "Invalid email address"
    }),
    password: z.string({
        required_error: "Password is required"
    }).min(6, { message: "Must be 6 or more characters long" })
})


export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required"
    }).email({
        message: "Invalid email address"
    }),
    password: z.string({
        required_error: "Password is required"
    }).min(6, { message: "Must be 6 or more characters long" })
})