import express from "express";
import { allProduct, productbyCategory, productbyId } from "../controls/productController.js";
import { addQuantity, addtocart, decreaseQuantity, viewCart } from "../controls/cartControl.js";
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
// view cart items
router.get("/cart/:id",viewCart)
// add quantity to cart
router.post("/:id/carts/:productid",addQuantity)
// decrease quantity to cart
router.post("/:id/carts/decrement/:productid",decreaseQuantity)