import express from "express";
import { allProduct, productbyCategory, productbyId } from "../controls/productController.js";
import { addQuantity, addtocart, decreaseQuantity, removeCart, viewCart } from "../controls/cartControl.js";
import { payment } from "../controls/paymentControl.js";
import { addWishlist } from "../controls/wishlistControl.js";
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
// remove   product from cart
router.post("/:id/carts/remove/:productid",removeCart)


//WISHLIST 
router.post("/:userid/wishlist/product/:productid",addWishlist)



// PAYMENT ROUTE
router.post("/payment/:id",payment)


