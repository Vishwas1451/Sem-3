const fetch = require('node-fetch')

fetch("http://www.google.com")
.then(res => res.text())
.then(text=> console.log(text))


fetch("https://jsonplaceholder.typicode.com/users")
//get method
.then(res => res.json())
.then(json => {console.log("fisrst user in the array"),
              console.log(json[0]);
              console.log("Name of the first ame in the array ");
              console.log(json[0].name);
})


// let todo = {
//     userid:123;
//     title:"lorem ipsum dolorb";
//     completed:false
// };
// // fetch("https://someplaceholder.typeicode.com/users",{
// //     method:'POST',
// //     body: json.stringify(todo),

