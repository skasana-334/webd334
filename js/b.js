
// tips(5);
// function tips(a){
//     var bill=parseInt(a);/*parse int change to int*/
//     console.log(bill+a);}
// this is working bcauz of context or code hoisting in which-
//Hoisting is JavaScript's default behavior of moving declarations to the top.
// 1)functions declarations are scanned and made available throughtout the code
/*
var  tips =function (a){
    var bill=parseInt(a);
    console.log(bill+a);}
  tips(5);
   this is also a way to work with funbctions*/

//   tip(5);
//   var  tip =function (a){
//     var bill=parseInt(a);
//     console.log(bill+a);}
 /* this will not work due to code hoisting
 2)variiable declarations are scanned and make  ubndefined*/
  
  /*                    SCOPE CHAINING             */
 /* Scope chain: Whenever our code tries to access a variable during the function call, it starts the searching from local variables. And if the variable is not found, it'll continue searching in its outer scope or parent functions' scope until it reaches the global scope and completes searching for the variable there.
 EG- child,parent,dadu
 if child doesn't have anythng he will take it from papa if papa have bnot then to dadu
 in similiar manner papa can ask to daadu
 but the viceversa is not true*/
 var name="sagar";
 console.log(name);
 function papa(){
     /* in this papa does not have name variable so he search and go to dadu
     console.log(name);*/
     var name="hi";
     console.log(name)/* in this papa has its name in local variable*/
     
 }
papa();
 
Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);
// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;
//proper random function to use for all random integer purposes.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }