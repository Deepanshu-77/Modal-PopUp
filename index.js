const modal = document.querySelector(".modal"),
      btn = document.querySelector(".btn"),
      close = document.querySelector(".close");

btn.addEventListener("click" , openmodal);
modal.addEventListener("click" , closemodal);
close.addEventListener("click" , closemodal);

function openmodal(e){
   e.preventDefault();
   modal.style.display = "block";

}
function closemodal(){
    
    modal.style.display = "none";
 
 }