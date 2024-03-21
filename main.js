let num = 1;
let secondsCount = 6;
let dispScreeen = document.getElementById('showNumberHere');
setInterval(() => {
   
    dispScreeen.innerHTML = num++ + ' seconds'; 

}, 1000
)


let minut = 1;
let showMinutes = document.getElementById('showMinutes');
setInterval(() => {

    showMinutes.innerHTML = minut++ + " minutes";

}, 60000
)
