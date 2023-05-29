import mongoose from 'mongoose';
import { exit } from 'node:process'

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI || '', { dbName: 'gymApp-vite' });
    console.log(`Mongo DB connected : ${connect.connection.host}`.underline.green)
  } catch (error) {
    new Error('Something went wrong!!! Could not connect to database to fetch Data')
    console.log(error)
    exit(1)
  }
}
export default connectDB