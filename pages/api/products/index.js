import nc from "next-connect";
import productModel from "../../../backend/models/productModel";
import initDb from '../../../backend/db/connectDb'
import NextCors from 'nextjs-cors';
initDb()
const handler = nc()
  .get(async(req, res) => {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });
      try {
         const products =  await productModel.find({})
         res.send(products)
      } catch (error) {
          console.log(error)
      }
  })
  .post(async(req, res) => {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });
   const {bag_id,bag_name,bag_price,qty}=req.body
   const product = await productModel.findOne({bag_id:bag_id})
   if(product){
    res.json({message:"Please change bag id"})
   }else{
    const newProduct = new productModel({bag_id,bag_name,bag_price,qty})
   try {
       await newProduct.save()
       res.json({data:newProduct, message:"New product created"})
   } catch (error) {
       console.log(error);
   }
   }
   
  })
  

export default handler;