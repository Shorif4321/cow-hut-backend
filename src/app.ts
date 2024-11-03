import express, { Application, Request, Response, urlencoded } from 'express'
const app: Application = express()
import cors from 'cors'
import usersRouter from './app/modules/user/user.route'

// middlewares
app.use(cors())

// parser
app.use(express.json())
app.use(urlencoded({ extended: true }))

// application route
app.use('/api/v1/users/', usersRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Cow-hut working Successfully')
})

export default app
