/* use of arrow function and callback function*/
// Traditional Anonymous Function
// function (a, b){
//     return a + b + 100;
//   }
  
//   // Arrow Function
//   (a, b) => a + b + 100;
  
//   // Traditional Anonymous Function (no arguments)
//   let a = 4;
//   let b = 2;
//   function (){
//     return a + b + 100;
//   }
  
//   // Arrow Function (no arguments)
//   let a = 4;
//   let b = 2;
//   () => a + b + 100;
//   // Traditional Anonymous Function
// function (a, b){
//     let chuck = 42;
//     return a + b + chuck;
//   }
  
//   // Arrow Function
//   (a, b) => {
//     let chuck = 42;
//     return a + b + chuck;
//   }
//   // Traditional Function
// function bob (a){
//     return a + 100;
//   }
  
//   // Arrow Function
//   let bob = a => a + 100;

  /* there is also a function callback in array which will work like a loop The callback function is called for each element of the array until it returns true for at least one element of the array. If neither of the elements in the array pass the test of callback function, it returns false.*/
  /* in array we have every as an example of callback function which can take function as an argument or 3values but it gives only bool result*/
  // func
//  iseve=(element) =>{
//    return element % 2===0;
//  };
//   var res=[2,4,5,7].every(iseve);
// console.log(res);
// //by giving value
// var res=[2,4,5,7].every((e) => (e%2===0));
/*element arrow and condn*/
let obj1={
  greeting: "Good Morning",
  names: ["Harry", "Rohan", "SkillF", "DjKhiladi"],
  speak(){
      this.names.forEach((student)=>{
          console.log(this.greeting + " Kukdoo Koo " + student);
      });
  }
}
obj1.speak();
// This variable is normally used to point the variable inside the function. But in the case of arrow functions, it points the variable outside the function. This is known as lexical this. 