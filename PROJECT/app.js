

import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import SignIn from "./routes/authRoute.js";
config()
const db = process.env.db
const PORT =process.env.PORT
// database connect
mongoose.connect(db)
.then(() => console.log("DB connected"))
.catch(error => console.log(error));

const app = express()
app.use(express.json());
app.use("/api",SignIn)
app.listen(PORT,()=>{
    console.log("server is ready",PORT);
})