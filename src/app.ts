import express, { Application, Request, Response, urlencoded } from 'express'
const app: Application = express()
import cors from 'cors'

// middlewares
app.use(cors())

// parser
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Cow-hut working Successfully')
})

export default app
