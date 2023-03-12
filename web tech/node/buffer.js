// var buf1 = Buffer.alloc(5);
// console.log(buf1);
// buf1 = Buffer.from([10,20,30,40,50]);
// console.log(buf1);

// var buf2=Buffer.from(buf1);
// console.log(buf2);

// var buf3 = new Buffer([10,20,30]); 
// console.log(buf3);

// //create a string buffer
// var buf4= Buffer.from("Hello World","utf-8");
// console.log(buf4);

// //writing to a buffer
// var len = buf4.write("This has been appended");
// console.log(buf4);

// var buf5 = Buffer.alloc(50);
// var len = buf5.write("This has been appended");
// console.log(len);
// //read from buffer
// console.log(buf5.toString("utf-8",0,13));

//copy function

var buf6 = Buffer.from("to the");
var buf7 = Buffer.from("Welcome at for Buffer Operation"); //we have to replace 'at for' by 'to the'
buf6.copy(buf7,8,0);
console.log(buf7.toString());

//compare Function
var buf8 = Buffer.from("Welme");
var buf9 = Buffer.from("Welcome");
var op=Buffer.compare(buf8,buf9);
console.log(op);
