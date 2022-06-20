import nc from "next-connect";
import productModel from "../../../backend/models/productModel";
import initDb from '../../../backend/db/connectDb'
initDb()
const handler = nc()
  .get(async(req, res) => {
      try {
         const products =  await productModel.find({})
         res.send(products)
      } catch (error) {
          console.log(error)
      }
  })
  .post(async(req, res) => {
   const {bag_id,bag_name,bag_price,qty}=req.body
   const product = await productModel.findOne({bag_id:bag_id})
   if(product){
    res.json({message:"Please change bag id"})
   }else{
    const newProduct = new productModel({bag_id,bag_name,bag_price,qty})
   try {
       await newProduct.save()
       res.json({message:"New product created"})
   } catch (error) {
       console.log(error);
   }
   }
   
  })
  

export default handler;