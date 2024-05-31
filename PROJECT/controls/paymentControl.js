import User from "../models/userModel.js"


 export const payment =async (req,res)=>{
    const id =req.params.id

    const user = await User.findById(id).populate({
        path: "cart",
        populate:{path:"productid"}
    })
    // console.log("payment", paymentData);

 const paymentCart = user.cart
if (paymentCart.length==0) {
    res.status(404).json({message:"car is empty"})
}
let totalAmount =0;
let totalQuantity=0;

const paymentOrder =paymentCart.map((item)=>{
    totalAmount+=item.productid.price * item.quantity
    totalQuantity+=item.quantity
    return{  price_data: {
        currency: "inr",
        product_data: item.productid.title,
            // name: item.productid.title,
            // description: item.productid.description
        
        unit_amount: Math.round(item.productid.price * 100),
        total_amoun:totalAmount
    },
    quantity: item.quantity
    
}})
console.log(paymentOrder);

}


