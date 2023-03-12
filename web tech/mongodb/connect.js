var MongoClient = require('mongodb').MongoClient

var url  ="mongodb://127.0.0.1:27017"

MongoClient.connect(url, function(err, db) {
   if(err) throw err
   var dbo = db.db("mydb")
   var obj = [{"srn":"002","name":"vishwas"},
               {"srn":"003","name":"DEEP"},
               {"srn":"004","name":"vishal"} , 
               {"srn":"005","name":"tushar"}             
]
   console.log("Database Created")
//    dbo.collection("students").insertOne({"srn":"001","name":"voolla"}, function(err, res){   //For inserting only one document
//        if(err) throw err
//        console.log("Document Inserted.................")
//        console.log(res)//displays in cmd(res means response)
//        db.close();
dbo.collection("students").insertMany(obj, function(err, res){   //For inserting more than one document
           if(err) throw err
           console.log("Document Inserted.................")
          // console.log(res)//displays in cmd(res means response)
         //   db.close();
})
//to find a perticular document
dbo.collection("students").find({"srn":"004"}).toArray(function(err, res){   //For inserting more than one document
    if(err) throw err
    console.log(res)
   // console.log(res)//displays in cmd(res means response)
    db.close();

})
})

