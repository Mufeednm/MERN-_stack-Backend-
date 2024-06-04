import express from "express";
import { addproduct, adminproduct, deleteproduct, showbycategory, updateproduct,  } from "../controls/adminproductController.js";
import uploadImage from "../middleware/uploadimage.js";
import { adminlogin,allusers ,finduser} from "../controls/adminloginController.js";
const router = express.Router();


// product add
router.post("/addproducts",uploadImage, addproduct);
// login admin
router.post("/login", adminlogin);
// all Usesr
router.get("/Users", allusers);
// find  User as per id
router.get("/Users/:id",finduser);
// all Products  from adminProduct controller
router.get("/Products", adminproduct);
// get products as per category
router.get("/Productss", showbycategory);
// put products and update
router.put("/Product/:id", updateproduct);
// delete products 
router.delete("/Product/:productid", deleteproduct);


export default router