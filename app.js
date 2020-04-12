//Variables for clicking buttons
var cockroach1 = document.getElementById("cockroach-1");
var beetle1 = document.getElementById("beetle-1");
var ant1 = document.getElementById("ant-1")

//Variables for selecting respective score components
var total_count = document.getElementById("total-score");
var final_score = document.getElementById("final-score");

let total = 0;

//Killing cockroach 1
let total_cockroachKilled = 0;
function cockroach1_btn(){
    cockroach1.style.visibility = "hidden";
    let cockroach_count = 0;
    cockroach_count++;
    total_cockroachKilled++;
    total = total + (cockroach_count*3);
    total_count.innerHTML = total;
    final_score.innerHTML = total;
    reappearCockroach();
}
function reappearCockroach(){
    setInterval( function (){
        cockroach1.style.visibility = "visible";
    },5000);  
}

//Killing beetle 1
let total_beetleKilled = 0;
function beetle1_btn(){
    beetle1.style.visibility = "hidden";
    var beetle_count = 0
    beetle_count = beetle_count + 1;
    total_beetleKilled++;
    total = total + (beetle_count*2);
    total_count.innerHTML = total;
    final_score.innerHTML = total;
    reappearBeetle();    
}
function reappearBeetle(){
    setInterval( function (){
        beetle1.style.visibility = "visible";
    },5000);  
}

//Killing ant 1
let total_antKilled = 0;
function ant1_btn() {
    ant1.style.visibility = "hidden";
    var ant_count = 0;
    ant_count = ant_count + 1;
    total_antKilled++;
    total = total + (ant_count);
    total_count.innerHTML = total;
    final_score.innerHTML = total;
    reappearAnt();     
}
function reappearAnt(){
    setInterval( function (){
        ant1.style.visibility = "visible";
    },5000);  
}

//Setting up events on clicking buttons with respective insects
cockroach1.addEventListener("click", cockroach1_btn);
beetle1.addEventListener("click", beetle1_btn);
ant1.addEventListener("click", ant1_btn);

//Generating end screen content after game gets over
var end_screen = document.getElementById("end-screen");
function end_screen_generator() {
    document.getElementById("cockroach-1").setAttribute("style","display:none");
    document.getElementById("beetle-1").setAttribute("style","display:none");
    document.getElementById("ant-1").setAttribute("style","display:none");
    end_screen.style.zIndex = "1";
}

//Generating countdown
var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds == 0){
        clearInterval(countdown);
        end_screen_generator();
    } 
}, 1000);







