const mongoose = require("mongoose")

const productSchema= mongoose.Schema({
  bag_id:{
    type:String,
    required:true
  },
  bag_name:{
    type:String,
    required:true
  },
  bag_price:{
    type:String,
    required:true
  },
  qty:{
    type:Number,
    required:true
  },
})

export default mongoose.models.product || mongoose.model("product",productSchema)