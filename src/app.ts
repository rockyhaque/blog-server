import express, { Request, Response } from 'express'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import blogRoutes from './module/blog/blog.route'

const app = express()

// middleware
app.use(express.json())

app.use('/api/blogs', blogRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Blog Store Server is running 🥰',
  })
})

// Global Error Handler
app.use(globalErrorHandler)

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: 'Route not found',
  })
})

export default app
