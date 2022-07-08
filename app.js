const express=require("express");
const bodyParser=require("body-parser");
const { getDay, getDate } = require("./date");
const date=require(__dirname+"/date.js");


const items = ["buy food","cook food"];
const workItems=[];


const app=express();
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", function(req , res){
  const day= getDate();
  res.render("list", { listTitle: day , newlistitems: items} )   ;
});


app.post("/",function(req, res){
  const item=req.body.newItem; 

  if (req.body.list==="work"){
    workItems.push(item);
    res.redirect("/work");
  } else{
    items.push(item);
    res.redirect("/");
  }
});


app.get("/work",function(req, res){

   res.render("list", {listTitle: "work list", newlistitems: workItems});

});


app.get("/about",function(req , res){
  res.render("about");
});


app.listen(3000, function(){
    console.log("running server on port 3000 ...")
});