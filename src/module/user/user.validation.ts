import { z } from 'zod'

const userValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Name must be provided with string type',
    })
    .min(3)
    .max(50),

  email: z.string({
    required_error: 'Email must be provided with string type',
  }),

  password: z.string({
    required_error: 'Password must be provided with string type',
  }),

  role: z
    .enum(['user', 'admin'], {
      required_error: "Role must be either 'user' or 'admin'",
    })
    .default('user'),
  isBlocked: z.boolean().default(false),
})

export const UserValidation = {
  userValidationSchema,
}
