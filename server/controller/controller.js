const Coll=require("../model/model");

exports.create=(req,res)=>{
    const testCollection=new Coll({
        id:req.body.id,
        name:req.body.name,
        course:req.body.course,
    })
    testCollection.save().then(doc=>
        {
            console.log(doc);
            res.send(doc);
        })
}


exports.find=(req,res)=>{
    Coll.find().then(user=>
        {
            res.send(user)
        })

    }
    

    exports.delete=(req,res)=>{
        const id = req.params.id;
    Coll.findByIdAndDelete(id).then(res.send({
            message:"deleted"
        }))



    }


