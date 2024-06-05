import User from "../models/userModel.js"
import dotenv from "dotenv"
dotenv.config()
import Razorpay from "razorpay"

const razorpay = new Razorpay({
                key_id: process.env.Razorpay_key_id,
                key_secret: process.env.Razorpay_key_secret,
            });
export const payment=async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await User.findById(id).populate({
                    path: "cart",
                    populate:{path:"productid"}
                });
// console.log(user.cart);
        if (!user || user.cart.length === 0) {
            return res.status(400).send('Cart is empty or user not found');
        }
        const amount = user.cart.reduce((total, item) => {
            return total + item.productid.price * item.quantity; 
        }, 0);
            // Assuming each cart item has a quantity and productid has a price
console.log(amount);
        const options = {
            amount: amount, // amount in the smallest currency unit
            currency: 'INR',
            receipt: `receipt_order_${Math.random().toString(36).substring(2, 15)}`
        };

        const order = await razorpay.orders.create(options);
        console.log(order);
        res.json(order);

    } catch (error) {
        
    }  }






//  export const payment = async (req,res)=>{
//         const id =req.params.id

//     const user = await User.findById(id).populate({
//         path: "cart",
//         populate:{path:"productid"}
//     })
//     // console.log("payment", paymentData);

//  const paymentCart = user.cart
// if (paymentCart.length==0) {
//     res.status(404).json({message:"cart is empty"})
// }

//     const razorpay = new Razorpay({
//         key_id: process.env.Razorpay_key_id,
//         key_secret: process.env.Razorpay_key_secret,
//     });
//     const options = req.body;
//     const order = await razorpay.orders.create(options);
//     if (!order) {
        
//     }
    
//     }
































//     const id =req.params.id

//     const user = await User.findById(id).populate({
//         path: "cart",
//         populate:{path:"productid"}
//     })
//     // console.log("payment", paymentData);

//  const paymentCart = user.cart
// if (paymentCart.length==0) {
//     res.status(404).json({message:"cart is empty"})
// }
// let totalAmount =0;
// let totalQuantity=0;

// const paymentOrder =paymentCart.map((item)=>{
//     totalAmount+=item.productid.price * item.quantity
//     totalQuantity+=item.quantity
//     return{  price_data: {
//         currency: "inr",
//         product_data: item.productid.title,
//             // name: item.productid.title,
//             // description: item.productid.description
        
//         unit_amount: Math.round(item.productid.price * 100),
//         total_amoun:totalAmount
//     },
//     quantity: item.quantity
    
// }})
// console.log(paymentOrder);



