// The HTML DOM is a standard for how to get, change, add, or delete HTML elements by indivisually target them by providing a structure of objects of html.
//to target we use document.anything u want to target
// for exampkle if u want ur first element of head-document.firstElementChild.firstElementChild-as first give whole html then second give head
// but it is very overwhelming u can use select by id classes or tags like document.getElementById("bjn") but if u want to classes or tags u should use like document.elementsBytags("li")[0]-it will change first li bcaus get element will select all li eleements
/*               innerhtml-
The Element property innerHTML gets or sets the HTML or XML markup contained within the element.*/
/* queryselector
The Document method querySelector() returns the first Element within the document that matches the specified selector(like classname,id) or plural ones, or group of selectors. If no matches are found, null is returned.*/

/********* in general we use query selector as it is very useful u can select by this doc..quer....("li a")to get different tags use  space
  ("li.item"if u want to select the child of someone)
  doc.quer("li").style.color/fontsize.height=10(wrong) use it in string like "10"
 */


/* now we all covered the basics no.w to make our code neat we can use calllist which can help to add another class which can be modified w/o changing the code of our css and html doc.query(".btn in which u want to add class").calllist.add=" new classname";
