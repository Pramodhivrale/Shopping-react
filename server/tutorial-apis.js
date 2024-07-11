var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const { data } = require("jquery");
var mongoClient = require("mongodb").MongoClient;

var conStr = "mongodb://localhost:27017";

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/vedios", (req, res) => {
    mongoClient.connect(conStr)
        .then((clientObj) => {
            var database = clientObj.db("tutorial");
            database.collection("titorial").find({}).toArray().then((document) => {
                res.send(document);
            })
        })
})

app.get("/vedios/:id", (req, res) => {
    var vid = parseInt(req.params.id);
    mongoClient.connect(conStr).then((clientObj) => {
        var database = clientObj.db("tutorial");
        database.collection("titorial").find({ id: vid }).toArray().then((document) => {
            res.send(document);
        })
    })
});

app.post("/addvedios", (req, res) => {

    var vedios = {
        "id": parseInt(req.body.id),
        "title": req.body.title,
        "url": req.body.url,
        "views": parseInt(req.body.views),
        "likes": parseInt(req.body.likes),
        "subscribe": (req.body.subscribe === "true") ? true : false
    }
    mongoClient.connect(conStr).then((obj) => {
        var database = obj.db("tutorial");
        database.collection("titorial").insertOne(vedios).then((result) => {
            console.log(`Vedios inserted`);
            res.redirect("/vedios");
        })
    })
});

app.put("/updatevedios/:id", (req, res) => {
    var vid = parseInt(req.params.id);
    var vedios = {
        "title": req.body.title,
        "url": req.body.url,
        "views": parseInt(req.body.views),
        "likes": parseInt(req.body.likes),
        "subscribe": (req.body.subscribe === "true") ? true : false
    }
    mongoClient.connect(conStr).then((clientObj) => {
        var database = clientObj.db("tutorial");
        database.collection("titorial").updateOne({ id: vid }, { $set: vedios }).then((result) => {
            console.log("vedio updated");
            res.redirect("/vedios");
        })

    })
});

app.delete("vedios/:id",(req,res)=>{
    var vid=parseInt(req.params.id);

    mongoClient.connect(conStr).then((clientObj) => {
        var database = clientObj.db("tutorial");
        database.collection("titorial").deleteOne({id:vid}).then((res)=>{
            console.log("vedio deleted");
            res.redirect("/vedios");
        })
          
        })
});

app.listen(5656);
console.log(`server started:http://127:0.0.1.5656`);
