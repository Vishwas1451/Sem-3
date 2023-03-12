//module.export = "this is a custom program";
//console.log("printed");

//module.exports.message="custom";
//module.exports.myadd =function add(a,b){return a+b};
//exports.mydate= function date(){return Date()};

// module.exports = function(fname,lname){
//      this.fname=fname;
//      this.lname=lname;
//      this.fullname= function(){
//          return this.fname+" "+this.lname;

//       }
     
// }

const fs = require("fs");
// fs.stat("node1.js",(err,stat)=>{if(err) throw err 
//             console.log("state of the file is:,", JSON.stringify(stat) )}) ;
fs.readFile('Instruction.txt',"utf-8",(err,data)=>{
             if(err) throw err 
             console.log("contents", data);
             });// Asynchronous file operation
const data =fs.readFileSync("Instruction.txt","utf-8");
console.log("contents",data);//synchronous file operation
//append to file
fs.appendFile("file1.txt", "This is a demo append file", (err) => {
            if(err) throw err
            console.log("Appended successfully");
        });
//open a file
fs.open("file1.txt", "w" , (err,file) => {if(err) throw err 
           console.log("openend successfully");
        });        
//write to a file
fs.writeFile("file1.txt"," w ",(err)=> {
    if(err) throw err
    console.log("Write operation done");
}  ); 

//delete a file
// fs.unlink("file1.txt",(err)=> {
//     if(err) throw err 
//     console.log("File Deleted");
// });


//rename a file
fs.rename("file1.txt","newfile.txt", (err)=>{
    if(err) throw err 
    console.log("File name got updated");
});




