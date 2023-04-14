const express = require("express");
const bodyParser = require("body-parser");
const getDate = require(__dirname+"/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


var items = [];
var workItems=[];

/* Geeting the home page by get method */

app.get("/", function (req, res) {
   let day = getDate;

  res.render("list",{listTitle: day, newListItems: items}); /**Creating Variables and using it in  the list.ejs */
});





/**For adding the post request to get the value entered in form in list.ejs */

app.post("/",function(req,res){
  let item = req.body.newItem;

  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
  items.push(item);
  res.redirect("/");
}
});


app.get("/work",function(req,res){
  res.render("list",{listTitle: "Work List", newListItems: workItems})
});

app.get("/home",function(req,res){
  res.render("about");
});

/**For Server Running s */
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});