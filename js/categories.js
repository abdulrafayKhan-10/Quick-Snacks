function myFunction(){
    document.getElementById("card_addition").style.display = "block";
document.getElementById("cards_title").style.display = "block";
document.getElementById("cards_button").style.display = "block";

var loadFile = function(event){
var image = document.getElementById('output');
image.src = URL.createObjectURL(event.target.files[0]);
};
var b = document.getElementById("text").value;
var c = document.getElementById("button").value;

document.getElementById("cards_title").innerHTML = b;
document.getElementById("cards_button").innerHTML = c;



}