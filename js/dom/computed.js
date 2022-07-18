// The Window.getComputedStyle() method returns an object containing the values of all CSS properties of an element, after applying active stylesheets and resolving any basic computation those values may contain.
// syntax-console.log(window.getComputedStyle(var name )) -it gives u all css  property ,to get specific u should use (var name).backgroundColor//in css it is back-color the diff is no hyphen and the c is capital like u can also give fontFamily in this way
//   //var name here what u get from doc.qsele(.class)

// u sould use this in func so u can get any element value by putting in func
// var fnt=( (element u want to select) => {
//     return console.log(window.getComputedStyle(elem... ).fontFamily;
// }