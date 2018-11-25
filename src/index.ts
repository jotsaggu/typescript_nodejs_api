
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import hemlet from 'helmet'
import "reflect-metadata"
import { rountes } from './routes/api'
const app = express()

app.use(cors())
app.use(hemlet())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(8045)

rountes(app)