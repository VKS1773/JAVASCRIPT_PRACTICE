    var index=0;
    showimg(index);
    function showimg(i){
        index+=i;
    var images=document.getElementsByClassName("img-item");
    var dots=document.getElementsByClassName("dot");
    for( i=0;i<images.length;i++){
       images[i].style.display="none";
    }
    for( i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace(" active","");
     }

     if(index>images.length-1){
        index=0;
     }
     if(index<0){
        index=images.length-1;
     }

     images[index].style.display="block";
     dots[index].className+="active";
 }
 