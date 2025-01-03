import express, { Request, Response } from 'express'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import userRouter from './module/user/user.route'
import blogRouter from './module/blog/blog.route'
import authRouter from './module/auth/auth.route'

const app = express()

// middleware
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)

// Admin Routes
app.use('/api/admin/users', userRouter)
app.use('/api/admin/blogs', blogRouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    success: true,
    message: 'Blog Store Server is running 🥰',
  })
})

// Global Error Handler
app.use(globalErrorHandler)

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
})

export default app
