var http = require('http');
var fetch = require('node-fetch');


//fetch info
/* fetch('http://localhost:3000/student',{
    method : 'GET',
    headers : {'Content-Type' : 'application/json'}

})
.then(res => res.json())
.then(res => console.log(res));
 */

//add info
fetch('http://localhost:3000', {
    method: 'POST',
    body:    JSON.stringify({"name":"Ritesh","Univ":"PESU","hostel":"no","address":"Hosur"}),
    headers: { 'Content-Type': 'application/json' },
})
 .then(res => console.log(res));
