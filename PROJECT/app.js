import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import authRouter from "./routes/authRoute.js";
import productRouter from "./routes/adminRoute.js"
import adminroute from "./routes/adminRoute.js"
config()
const app = express()
app.use(express.json());
const PORT =process.env.PORT||3000;

// database connect
const db = process.env.db
mongoose.connect(db)
.then(() => console.log("DB connected"))
.catch(error => console.log(error));



app.use('/api/users', authRouter);

// app.use('/api/admin',adminroute);
app.use('/api/product',productRouter);


app.listen(PORT,()=>{
    console.log("server is ready",PORT);
})