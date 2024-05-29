import Product from "../models/products.js"
import express from "express";
import { productJoi } from "../validation/authJOI.js";

// Add product
export const addproduct= async (req,res,next)=>{

   try {
      // const {title,description,price,category}= req.body;
      const validatedProduct = await productJoi.validateAsync(req.body);

//  to mongodb
const newProduct=new Product({
   title : validatedProduct.title, 
   description : validatedProduct.description,
   price: validatedProduct.price,
   category : validatedProduct.category,
   productImg: req.cloudinaryImageUrl
});

await newProduct.save()
res.status(201).json({message:"new product is ready"})

   } catch (error) {

      next(error)
      
   }
}
 