import express, { Express } from "express"
import * as dotenv from "dotenv"
import colors from 'colors'
import connectDB from "./config/db"
import { routes } from './routes/routes'
import cors from 'cors'


dotenv.config()

colors.enable();
colors.enable();

const port = process.env.PORT || 5001
const app: Express = express()

connectDB()
app.use(cors())
app.use(express.json())

app.use('/nutrition', routes)

app.listen(port, () => {
  console.log(`Application started on http://localhost:${port}/nutrition`.underline.cyan)
})
