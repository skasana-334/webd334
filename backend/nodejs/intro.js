// # use ctrl + ~ then node backend/nodejs/intro to access in cmd line of vs code
// # u can direct write your code by write nnode then enter and the console.log or any js thing
// # to exit use .exit or ctl+c(2 times) and u can clear by write clear
// node js allow to run your js code on server
                 // ***npm***//
// #NPM is a package manager for Node.js packages, or modules if you like.

// #www.npmjs.com hosts thousands of free packages to download and use.
    
// #The NPM program is installed on your computer when you install Node.js

//to download you just have to write npm install in cmd line and package name like npm install superheroes
//to use it use this type of format
const supervillains = require('supervillains');
 
supervillains.all;
//=> ['Abattoir', 'Able Crown', …]
 
x=supervillains.random();
console.log(x);