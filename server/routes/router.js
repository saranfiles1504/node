const express=require("express");
const route=express.Router();


const exp=require("../export/export");
const controller=require("../controller/controller");


route.get("/",exp.inde);
route.get("/data",exp.new);




route.post('/api/users', controller.create);
route.get("/api/users",controller.find);
route.delete("/api/users/:id",controller.delete);






module.exports=route;