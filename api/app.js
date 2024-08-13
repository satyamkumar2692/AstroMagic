import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import router from "./router.js";
import morgan from "morgan";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

import path from "path";
import { fileURLToPath } from "url";
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/dist/index.html"))
);

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((e) => {
    console.log("failed");
  });

// app.use(cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true

// }));

app.get("/", (req, res) => res.status(200).json("hi"));
app.use("/api", router);

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
