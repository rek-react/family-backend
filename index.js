import { config } from "dotenv";
config();
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { errorMiddleware } from "./middlewares/error.js";
import cities from "./router/cities.js";

const app = express();
app.use(cors({ credentials: true, origin: process.env.CLIENT_URI }));
app.use("/api", cities);
app.use(errorMiddleware);
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    app.listen(process.env.PORT, () => {
      console.log(`Server started on ${process.env.PORT}`);
    });
  } catch (e) {
    throw e;
  }
};
start();
