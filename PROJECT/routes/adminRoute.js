import express from "express";
import { addproduct } from "../controls/adminproductController.js";
import uploadImage from "../middleware/uploadimage.js";
const router = express.Router();



router.post("/addproducts",uploadImage, addproduct);
export default router