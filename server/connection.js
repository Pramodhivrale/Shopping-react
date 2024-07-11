var express=require("express");
var cors=require("cors");
var bodyParser = require("body-parser");
var mongoClient=require("mongodb").MongoClient;

var conStr="mongodb://localhost:27017";
var app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/customer",(req,res)=>{
    mongoClient.connect(conStr)
    .then(obj=>{
        var database=obj.db("tutorial");
        database.collection("customers").find({}).toArray().then(document=>{
            res.send(document);
            res.end();
        })
    })
    .catch(err=>{
        console.log(err);
    })
});

app.post("/register",(req,res)=>{
   var customerDetails={
    UserId :req.body.UserId,
    UserName :req.body.UserName,
    Password :req.body.Password,
    Age:parseInt(req.body.Age),
    Email :req.body.Email,
    Mobile: req.body.Mobile
   }
   mongoClient.connect(conStr)
   .then(obj=>{
      var database= obj.db("tutorial");
      database.collection("customers").insertOne(customerDetails)
      .then(()=>{
        console.log("Record Inserted");
        res.redirect("/customer");
      })
   }).catch(err=>{
    console.log(err);
   })
  
});

app.listen("5000");
console.log(`Server started :http://127.0.0.1.5000`);