console.log("welcome to Node.js");
var name = "john";
console.log("hello, ",name );
//timer module

//var timer= setInterval(function(){console.log("welcome to pes")},2000 );

//ecport literals

var msg = require('./node2.js');
//console.log(msg.message);
//console.log("sum is",msg.myadd(2,4));
//console.log("date is",msg.mydate());

var student1 =new msg("Vishwas","M");
var student2 =new msg("Rethwik","Sai");
var student3 =new msg("tushar","Bothra");
console.log(student1.fullname());
console.log(student2.fullname());
console.log(student3.fullname());