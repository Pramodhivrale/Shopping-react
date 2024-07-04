var express=require("express");
var cors=require("cors");
var mongoClient=require("mongodb").MongoClient;


var app=express();


app.get("/",(req,res)=>{
 res.send("<h2>Hello</h2>")
});

app.get("/connect",(req,res)=>[
    mongoClient.connect("mongodb://localhost:27017")
    .then(()=>{
        res.send("connected with MongoDb server succesfully");
    }).catch((err)=>{
        console.log(err);
    })
]);

app.get("/data/:id/:name",(req,res)=>{
    res.send(`
        Id :${req.params.id} <br>
        Name :${req.params.name}
        `);
});

app.get("/products",(req,res)=>{
    res.send([{Name:"Apple Phone",Price:50000.0},{Name:"Samsung",Price:56562.0}]);
});

app.get("*",(req,res)=>{
    res.send("<h2>Not found</h2>");
});

app.listen("5000");
console.log(`Server started :http://127.0.0.1.5000`);


