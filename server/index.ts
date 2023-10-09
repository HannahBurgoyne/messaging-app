import * as Path from 'node:path'
import express from 'express'
import cors from 'cors'
const server = express()
import { createServer } from 'http'
import { Server } from 'socket.io'
import dotenv from 'dotenv'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, { cors: { origin: 'http://localhost:3000' } })

dotenv.config()

const port = process.env.PORT || 3000

httpServer.listen(port, () => {
  console.log('Server listening on port', port)
})

server.use(express.json())
server.use(cors())

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

io.on('connection', (socket) => {
  console.log(`client ${socket.id} just connected`)
  socket.on('disconnect', () => {
    console.log(`client ${socket.id} disconnected`)
  })
})

export default server
