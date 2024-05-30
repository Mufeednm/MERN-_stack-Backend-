import express from "express";
import { allProduct, productbyCategory, productbyId } from "../controls/productController.js";
const router=express.Router()
// all product Route
router.get("/products",allProduct)
// id product Route
router.get("/products/:id",productbyId)
// category Product Route
router.get("/products/category/:categoryName",productbyCategory)
export default router