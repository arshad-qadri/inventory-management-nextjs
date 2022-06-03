
const mongoose = require("mongoose")

const historySchema= mongoose.Schema({
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
  total_bag:{
    type:Number,
    required:true
  },
  date:{
      type:Date,
      required:true
  },
  history_type:{
      type:String,
      required:true
  }
})

export default mongoose.models.history || mongoose.model("history",historySchema)