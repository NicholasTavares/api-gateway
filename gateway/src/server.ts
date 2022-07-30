import express, { Request, Response } from 'express'
import logger from 'morgan'
import helmet from 'helmet'
import httpProxy from 'express-http-proxy-async'
import allowCors from "./cors"

const app = express()

app.use(allowCors);
app.use(logger('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req: Request, res: Response) => {
  res.json({message: 'Running aplications'})
})

app.use('/weather', httpProxy('http://localhost:3001'))
app.use('/trends', httpProxy('http://localhost:3002'))
app.use('/business', httpProxy('http://localhost:3004'))

app.listen(3003, () => console.log('Gateway rodando na porta 3003...'))