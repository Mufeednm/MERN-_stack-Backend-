import Cart from "../models/cartModel.js"
import Product from "../models/products.js"
import User from "../models/userModel.js"


export const addtocart=async (req,res)=>{
 const {id} = req.params
 const {productid} = req.params
 
const user= await User.findById(id)
if (!user) {
return res.status(404).json({message :" user is not found "})    
}
const product= await Product.findById(productid)
if (!product) {
    return res.status(404).json({message :" product is not found "})    
    }
    // console.log(product);

    // add to Cart 
    let cartitem = await Cart.findOne({userid:user._id,productid:product._id}) 
    if (cartitem) {
      console.log( "cartitem",cartitem);
    return res.status(200).json({message:"already in cart"})
    
  } else{
    cartitem=await Cart.create({
        userid:user._id,
        productid:product._id
    })
  }
  user.cart.push(cartitem._id)
await user.save()
return res.status(202).json({message:"user cart is ready"})
}

// viec Cart Products
export const viewCart = async(req,res)=>{
    try {
        const {id}=req.params
        const user = await User.findById(id)
        .populate({
            path : 'cart',
            populate : { path : 'productid'}
        });

        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        if(!user.cart || user.cart.length === 0){
            return res.status(200).json({message:"user cart is empty" , data:[]})
        }
        res.status(200).json(user.cart)
    } catch (error) {

        return res.status(404).json({message:"internal server error"})
        
    }
}

// add quantity of cart
const addQuantity = (req,res)=>{
    
}