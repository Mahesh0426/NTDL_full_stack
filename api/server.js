import express from "express";
import { connectMongo } from "./config/dbConfig.js";
import taskRouter from "./Router/taskRouter.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import path from "path";

//initialize express app
const app = express();

const PORT = process.env.PORT;

//define CORS
const corsOptions = {
  credentials: true,
  origin: true,
};
// cors middleware
app.use(cors(corsOptions));

//json parse middleware
app.use(express.json());

// connect to mongoDB
connectMongo();
const __dirname = path.resolve();

//routes
//server.side rendering
app.use("/", express.static(path.join(__dirname, "fronten")));
// Task routes
app.use("/api/tasks", taskRouter);

//start server

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log("your server is running at http://localhost:8000/");
});
