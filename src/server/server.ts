import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

app.use(cors())
app.use(cookieParser())

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

export default app
