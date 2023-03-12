var express= require("express")

var app= express();
// error handling middleware 
app.use("/student",function(err,req,res,next){
    console.log(err.stack);
    res.send(500).send("Something went wrong")

})
//router handler
app.get("/student/:id",function(req,res,next){
    if(req.params.id.indexOf("2000")!=-1){
      var err = new Error("Something went Wrong!!!")
        next(err)
    }

    else{
        res.send("Everything is fine with"+req.params.id)
        next();
    }
    app.use("/student",function(req,res){
        console.log("I am Fine")
    })
})

   app.listen(3000,function(){
        console.log("Server is listening on port 3000")
  

})