import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import { postRouter } from './Post/infraestructure/routes/postRouter';

const port = process.env.PORT!;
const consumerURL = process.env.CONSUMER_URL!;

const app = express()

app.use(express.json())
app.use(cors({
  origin: [consumerURL],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));



app.use('/api/post', postRouter)


app.listen(port, () => {
  console.log(`Server-2 running on port ${port}`)
})