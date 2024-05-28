import express from "express"
import { LogIn, SignIn } from "../controls/authControl.js";

const route = express.Router();

 route.post("/SignIn",SignIn);
 route.post("/LogIn",LogIn);

export default route