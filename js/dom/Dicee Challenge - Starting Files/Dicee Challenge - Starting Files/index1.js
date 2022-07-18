var r1=Math.floor(Math.random()*6)+1;
var r2=Math.floor(Math.random() * 6)+1;
var rimg = "images/dice" + r1 + ".png";
var rimg2 = "images/dice" + r2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",rimg);
document.querySelectorAll("img")[1].setAttribute("src",rimg2);

