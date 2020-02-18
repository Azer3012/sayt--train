var left=document.querySelector(".left");
var right=document.querySelector(".right");
var slideItem=document.querySelector(".slide-item");
var itemIndex=-1;
right.addEventListener('click',function(){

    if(itemIndex<2){
        itemIndex++;
    }
    else{
        itemIndex=0;
    }
    clearTogle();
    slideItem.children[itemIndex].classList.toggle("togle");
});
function clearTogle(){
    for(var i=0;i<slideItem.children.length;i++){
        slideItem.children[i].classList.remove("togle");
    }
};

left.addEventListener('click',function(){
    if(itemIndex>0){
        itemIndex--;
    }
    else{
        itemIndex=2;
    }
    clearTogle();
    slideItem.children[itemIndex].classList.toggle("togle");
});

