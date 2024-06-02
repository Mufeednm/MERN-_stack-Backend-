import Product from "../models/products.js";
import User from "../models/userModel.js";
import wishList from "../models/wishList.js";
  // add to wish List
export const addWishlist = async (req, res) => {
  try {
    const  userid = req.params.userid 
    const  productid  = req.params.productid
    const user = await User.findById(userid);
    if (!user) {
      res.status(404).json({ message: "user not found" });
    }
    const product = await Product.findById(productid);
    if (!product) {
     return  res.status(404).json({ message: "product is not found" });
    }
    let wishlistItem = await wishList.findOne({
      userId: user._id,
      productId: product._id
    });

    if (wishlistItem) {
      return res.status(404).json({ message: "already in wishlist" });
    }

    wishlistItem = await wishList.create({
      userId: user._id,
      productId: product._id,
      quantity: 1,
    });
    user.Wishlist.push(wishlistItem._id)

    await user.save();

    // console.log(wishlistitem);
    res.status(200).json({ message: "wishList added" });
  } catch (error) {}
};

//  show all Wish lists
export const showwishList = async (req,res)=>{
  const {id} =req.params
const wishList= await User.findById(id).populate({
  path:"Wishlist",
  populate:{path:"productId"}
})
if (!showwishList || showwishList.length==0) {
  res.status(404).json({message:"there is not a wishlist in User"})
  
}
res.status(200).json({message:"wishlist is shown",wishList})

}
