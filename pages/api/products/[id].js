import nc from "next-connect";
import productModel from "../../../backend/models/productModel";
import initDb from '../../../backend/db/connectDb'
initDb()
const handler = nc()
  .delete(async(req, res) => {
      try {
          await productModel.findOneAndDelete({_id:req.query.id})
          res.json({message:"Deleted successfully"})
          
      } catch (error) {
          console.log(error);
      }
  })
  .put(async(req, res) => {
      try {
          const product = await productModel.findOne({_id:req.query.id})
          product.bag_id=req.body.bag_id,
          product.bag_name=req.body.bag_name,
          product.bag_price=req.body.bag_price,
          product.total_bag=req.body.total_bag,
          await product.save()
          res.json({message:"Updated successfully"})
      } catch (error) {
          console.log(error);
      }
   
  })
  .post(async(req, res) => {
    try {
        const product = await productModel.findOne({_id:req.query.id})
        product.bag_id=req.body.bag_id,
        product.bag_name=req.body.bag_name,
        product.bag_price=req.body.bag_price,
        product.total_bag=req.body.total_bag,
        await product.save()
        res.json({message:"Added successfully"})
    } catch (error) {
        console.log(error);
    }
 
})

export default handler;