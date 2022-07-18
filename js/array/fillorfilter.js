/* fill function -The fill() method changes all elements in an array to a static value, from a start index (default 0 ) to an end index (default array. length ) it takes array.fill(element u want to put,startidx(optional and incl),lastidx(optional and excl))*/
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

/* filter-The filter() method creates a new array with all elements that pass the test implemented by the provided function.*/
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
/* uses  as callback function*/
console.log(result);