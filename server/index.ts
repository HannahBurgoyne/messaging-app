import httpServer from './server.ts'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 3000

httpServer.listen(port, () => {
  console.log('HTTP Server listening on port', port)
})
