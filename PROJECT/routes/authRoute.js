import express from "express"
import { login, signup } from "../controls/authControl.js"

const router = express.Router() 

//user register
router.post('/register',  signup)

//user login
router.post('/Login', login)


export default router;