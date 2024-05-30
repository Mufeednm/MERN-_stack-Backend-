import express from "express";
import { allProduct, productbyCategory, productbyId } from "../controls/productController.js";
import { addtocart, viewCart } from "../controls/cartControl.js";
const router=express.Router()
// all product Route
router.get("/products",allProduct)
// id product Route
router.get("/products/:id",productbyId)
// category Product Route
router.get("/products/category/:categoryName",productbyCategory)
export default router


// Route fo CART
router.post("/:id/cart/:productid",addtocart)
router.get("/cart/:id",viewCart)

