const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

mongoose.connect("mongodb+srv://1:1@cluster0.awtvh5m.mongodb.net/mvc?retryWrites=true&w=majority",{

}).then(con=>{
    console.log("database connected");
})
const db=mongoose.connection;

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.use("/",require("./server/routes/router"));
app.listen("10000",()=>{
    console.log("connected");
})