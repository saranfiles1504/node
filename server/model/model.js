const mongoose=require("mongoose");
const attrs=new mongoose.Schema({
    id:{
        type:Number,
        required:false
    },
    name:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    }
})
const Coll=mongoose.model('Collection',attrs);
module.exports=Coll;