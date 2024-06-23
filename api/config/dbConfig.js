import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectMongo = () => {
  try {
    const connect = mongoose.connect(process.env.MONGO_DB_CONNECTION_URL);
    if (connect) {
      console.log(
        "database connection established at " +
          process.env.MONGO_DB_CONNECTION_URL
      );
    }
  } catch (error) {
    console.log("error", error);
  }
};
