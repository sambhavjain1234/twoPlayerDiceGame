var round=Math.floor((Math.random()*6)+1);

var randomimage="images/dice"+round+".png";

var img1=document.querySelectorAll("img")[0];


img1.setAttribute("src",randomimage);
var round1=Math.floor((Math.random()*6)+1);
var randomimage="images/dice"+round1+".png";
var img2=document.querySelectorAll("img")[1].setAttribute("src",randomimage);
 if(round > round1){
   var random = "🚩 player 1 wins ";
 }
 else if(round < round1){
   var random = " player 2 wins 🚩";
 }
 else{
   var random = " draw ";
 }



document.querySelector("h1").innerHTML=random;
