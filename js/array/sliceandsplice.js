// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]-start from 2nd idx till last-1 as if -2 is there then it will go to last-2 if end will>start then we get empty array


console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

/* splice -The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.*/
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4 if it is 2 then it will delete 2 elements and put only one word may
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
