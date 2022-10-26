const express = require("express");
const bodyParser = require("body-parser");

var items = [];

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

app.set('view engine','ejs');

app.get("/list",function(req,res){
  var today = new Date();

 var options = {
   weekday:"long",
   day:"numeric",
   month:"long"
 };
 var day = today.toLocaleDateString("en-US",options);

  res.render("list",{
    kindOfDay:day,
    items:items
  });
});

app.get("/",function(req,res){
  res.render("about");
});

app.post("/",function(req,res){
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/list");
});

app.listen(3000,function(){
  console.log("server started in port 3000");
});
