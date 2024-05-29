import Product from "../models/products.js";
import express from "express";
import { productJoi } from "../validation/authJOI.js";
const app=express();
app.use(express.json());

// Add product
export const addproduct= async (req,res,next)=>{
   try {
      const {title,description,price,category}= req.body;
      console.log(title);
      console.log(description);
      console.log(price);
//  to mongodb
const newProduct= new Product({
   title:title,
   description: description,
   price: price,
   category: category,
   productImg: req.cloudinaryImageUrl,
})
await newProduct.save()
res.status(201).json({message:"new product is ready"})

   } catch (error) {
      
   }
}
