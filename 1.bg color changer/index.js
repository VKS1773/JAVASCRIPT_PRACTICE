
function changecolor() {
     var hex_numbers=["0","1","2","3","4","5","7","8","9","A","B","C","D","E","F"];
     var hex='';
     for(var i=0;i<6;i++){
       var random=Math.floor(Math.random()*hex_numbers.length);
       hex+=hex_numbers[random];
     }
     document.getElementById("hex-code").innerHTML=hex;
     document.getElementsByTagName("body")[0].style.background="#"+hex;

}