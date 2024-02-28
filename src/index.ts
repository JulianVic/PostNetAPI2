import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import { postRouter } from './Post/infraestructure/routes/postRouter';
// import ioClient from 'socket.io-client'
// const socket = ioClient('http://localhost:3002')
const app = express()

const port = process.env.PORT;

app.use(express.json());
app.use('/api/post', postRouter);

app.listen(port, () => {
  console.log(`Server-2 running on port ${port}`)
})