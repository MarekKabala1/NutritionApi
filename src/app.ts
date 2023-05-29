import express, { Express } from "express"
import * as dotenv from "dotenv"
import colors from 'colors'
import connectDB from "./config/db"
import { routes } from './routes/routes'

dotenv.config()

colors.enable();
colors.enable();

const port = process.env.PORT || 5001
const app: Express = express()

connectDB()

app.use(express.json())

app.use('/nutrition', routes)

app.listen(5000, () => {
  console.log(`Application started on http://localhost:${port}/nutrition`.underline.cyan)
})
