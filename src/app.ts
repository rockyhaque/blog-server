import express, { Request, Response } from 'express'


const app = express()

// middleware
app.use(express.json())

// app.use('/api/products', productRouter)
// app.use('/api/orders', orderRouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Blog Store Server is running 🥰',
  })
})

export default app
