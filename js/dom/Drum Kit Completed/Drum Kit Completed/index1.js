for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var x= this.innerHTML;
  // In an event, this refers to the element that received the event
  makeSound(x);
    });
}
function makeSound(key){
    if(key=="w"){
        var sound = new Audio("sounds/crash.mp3");
         sound.play();
    }
    else if(key=="a"){
        var drum = new Audio("sounds/kick-bass.mp3");
         drum.play();
    }
    else if(key=="s"){
      var drum = new Audio("sounds/snare.mp3");
       drum.play();
  }
  else if(key=="d"){
    var drum = new Audio("sounds/tom-1.mp3");
     drum.play();
}
else if(key=="j"){
  var drum = new Audio("sounds/kick-bass.mp3");
   drum.play();
}
else if(key=="k"){
  var drum = new Audio("sounds/tom-2.mp3");
   drum.play();
}
   
}


