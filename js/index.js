
function myFunction(){
            document.getElementById("addition_card6").style.display = "block";
   document.getElementById("card6_title").style.display = "block";
   document.getElementById("card6_button").style.display = "block";
  
   var loadFile = function(event){
      var image = document.getElementById('output');
      image.src = URL.createObjectURL(event.target.files[0]);
};
      var b = document.getElementById("text").value;
      var c = document.getElementById("button").value;
      
      document.getElementById("card6_title").innerHTML = b;
      document.getElementById("card6_button").innerHTML = c;

      
      
}