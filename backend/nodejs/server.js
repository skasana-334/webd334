// Express.js is a web framework for Node.js. It is a fast, robust and asynchronous in nature.
//it helps to make our own server u have to do it everytime when u make project
// we install nodemon so that any change will refrest and restart our server to use type nodemon instead of node
const express = require('express')
const app = express()
//to get response from server use
//The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.
app.get('/', function (req, res) {  
    res.send('Welcome to JavaTpoint');  
 }) 
 //to use another another url u can use and in browser u should type localhost:3000/bio to get this
 app.get('/bio', function (req, res) {  
    res.send("i'm sagar"+"i'm an eng student");  
 }) 
 app.get('/about', function (req, res) {  
    res.send("i'm sagar"+"i'm an  student");  
 }) 
app.listen(3000,function(){
    console.log("server starts");
})
