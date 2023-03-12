var MongoClient = require('mongodb').MongoClient

var url  ="mongodb://127.0.0.1:27017"

MongoClient.connect(url, function(err, db) {
    if(err) throw err
   var dbo = db.db("mydb")
   var myquery = {"srn":"004"}
   var newquery = {$set:{"name":"vishalbsdk"}}
   console.log("Database Created")
    // dbo.collection("students").find({}).toArray( function(err, res){   //For inserting more than one document
        dbo.collection("students").updateOne(myquery, newquery, function(err, res){
        if(err) throw err
         console.log("updated")//displays in cmd(res means response)
        db.close();
    
    })
    })
    