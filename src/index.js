import 'dotenv/config'

import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json())


app.use(routes)

app.listen(process.env.SERVER_PORT, console.log('server running'))