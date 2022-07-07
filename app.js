const express=require("express");
const bodyParser=require("body-parser");

var items = [];

const app=express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function(req , res){

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today  = new Date();
  
 
  var day=today.toLocaleDateString("en-US", options);  // Saturday, September 17, 2016
  
    res.render("list", { day: day , newlistitems: items} )   ;
});

app.post("/",function(req, res){
  var item=req.body.todo;
  
  items.push(item);
  res.redirect("/");
})

app.listen(3000, function(){
    console.log("running server on port 3000 ...")
});