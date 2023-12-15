import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.3u1awx8.mongodb.net/`;

  mongoose
    .connect(MONGODB_URI)
    .then((res) => console.log(`Mongoose connected on the ${MONGODB_URI}`))
    .catch((err) => console.log(err));

  // mongoose.connection.on('connected', () => {
  //     console.log("Mongoose connected to MongoDB at ", MONGODB_URI);
  // })

  // mongoose.connection.on('disconnected', () => {
  //     console.log("Mongoose disconnected");
  // })

  // mongoose.connection.on('error', () => {
  //     console.log("Error in Mongoose connection", error.message)
  // })
};

export default Connection;
