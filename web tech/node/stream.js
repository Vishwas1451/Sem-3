var fs = require("fs");

var data = ''; //empty buffer

//Create a readable stream
var readerStream = fs.createReadStream("./Instruction.txt"); 

//Set encoding to utf8
readerStream.setEncoding('UTF8');

//Handle Stream events -> data, end, error
readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end', function(){
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err);
});
console.log("Program ended");


/*
//Writing to a stream
var data = "Learning with streams with updated data !!!"

//Create a writable stream
var writeStream = fs.createWriteStream('buffwrite.txt');

writeStream.write(data, 'utf8');

//Mark the end of the file
writeStream.end();

//Handle stream events -> finish, error
writeStream.on('finish', function(){
    console.log("Write completed");
});

writeStream.on('error', function(err){
    console.log(err.stack);
});

console.log("Program ended");
*/

/*
//Pipe
var readerStream = fs.createReadStream('buffread.txt');
var writeStream = fs.createWriteStream("buffwrite.txt");

//Pipe the read and write operations
readerStream.pipe(writeStream);
console.log("Program ended");
*/

/*
//Transform
//Chaining to compress and decompress - zlib

var zlib = require("zlib");

fs.createReadStream('buffread.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("buffwrite.txt.gz"));

console.log("File Compressed");
*/

/*
var zlib = require("zlib");

fs.createReadStream('buffwrite.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream("buffwrite.txt"));

console.log("File Decompressed");
*/