var express = require('express');
var app = express();

app.get("/hello",function(req,res){
	var err = new Error("Something went wrong")
	next(err);  // error handling middleare fun called 
})
//error handling midlleware fn 
app.use(function(err,req,res,next){
	res.status(500).send("Something went wrong again from server")
})

app.listen(3000)