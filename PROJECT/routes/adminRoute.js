import express from "express";
import { addproduct } from "../controls/adminproductController.js";
import uploadImage from "../middleware/uploadimage.js";
import { adminlogin,allusers } from "../controls/adminloginController.js";
const router = express.Router();


// product add
router.post("/addproducts",uploadImage, addproduct);
// login admin
router.post("/login", adminlogin);
// all Usesr
router.get("/Users", allusers);


export default router