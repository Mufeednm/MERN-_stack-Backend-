import Product from "../models/products.js";

// show all Products
export const allProduct = async (req, res) => {
  try {
    const allProducts = await Product.find();
    // console.log(allProducts);
    if (!allProducts) {
      return res.status(404).json({ message: "no products is to finding" });
    }
    return res.status(200).json({ message: "all producs is shown" });
  } catch (error) {
    return res.status(404).json({ message: "no products is to finding" });
  }
};

//show products by id

export const productbyId = async (req, res, next) => {
  try {
    const product_id = req.params.id;
    const productbyId = await Product.findById(product_id);
    console.log(productbyId);
    if (!productbyId) {
      return res.status(404).json({ message: "no Products in this id" });
    }
    return res.status(200).json({productbyId});
  } catch (error) {
    return res.status(404).json({ message: "no Products in this id" });
  }
};

// show by category name
// export const productbyCategory=async (req,res)=>{
//     const categoryName=req.params


//     const products = await Product.find({
//         $or: [
//             { category: { $regex: new RegExp(categoryName, 'i') } },
//             { title: { $regex: new RegExp(categoryName, 'i') } },           didnt under stand
//         ]
//     }).select('title category price');
    
//     if (products.length === 0) {
//         return res.status(404).json({ message: "No items found in the given category" });
//     }
    
//     res.status(200).json({ products });
// }