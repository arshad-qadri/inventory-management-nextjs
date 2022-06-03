import mongoose from 'mongoose'
import config from '../config/config'

function initDB(){
    if(mongoose.connections[0].readyState){
        console.log("alredy connected")
        return
    }
    mongoose.connect(config.url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    mongoose.connection.on('connected',()=>{
        console.log("connected to db")
    })
    mongoose.connection.on('error',(err)=>{
        console.log("error connecting",err)
    })
}


export default initDB