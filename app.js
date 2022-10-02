const express=require("express");
const bodyParser=require("body-parser");
var _=require("lodash"); 

const getDate=require("./date");
const date=require(__dirname+"/date.js");
console.log(date);


const app=express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));


let data=[];

app.get("/",function(req,res)
{
    // const day=date.getDate();
    res.render("lists")
})

app.get("/about",function(req,res)
{
    res.render("about")
});

app.get("/contact",function(req,res)
{
    res.render("contact");
})

app.get("/book",function(req,res)
{
    res.render("book",{data:data[0]});
})


app.get("/talktous",function(req,res)
{
    res.render("talktous");
})

app.get("/bookSlot",function(req,res)
{
    res.render("bookSlot");
})

app.post("/",function(req,res)
{
    
    var city=req.body.city;
    var pincode=req.body.pincode;
    console.log(pincode,city);
    let temp="near pincode: "+pincode;
    data.pop();
    if(city.length>=1)
    {
        temp="in : "+city;
    }
    data.push(temp);

    res.redirect("/book");
});




app.listen(3000,function(req,res)
{
    console.log("Server is Started at localHost 3000");
})