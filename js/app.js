const colors = ["green", "red", "rgb(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = numeroRandom()
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function numeroRandom (){
   return Math.floor(Math.random() * colors.length);
}