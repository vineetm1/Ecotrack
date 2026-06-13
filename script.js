let chartCreated = false;

function calculateFootprint() {

let electricity =
Number(document.getElementById("electricity").value);

let vehicle =
Number(document.getElementById("vehicle").value);

let lpg =
Number(document.getElementById("lpg").value);

let flights =
Number(document.getElementById("flights").value);

let footprint =
(electricity * 0.82) +
(vehicle * 0.12) +
(lpg * 42) +
(flights * 90);

footprint = Number(footprint.toFixed(2));

document.getElementById("result").innerHTML =
footprint + " kg CO₂";

let ecoScore =
Math.max(0, Math.round(100 - footprint / 5));

document.getElementById("ecoScore").innerHTML =
"Eco Score: " + ecoScore + "/100";

let rating = "";

if(footprint < 100){
rating = "🟢 Excellent Sustainability";
}
else if(footprint < 250){
rating = "🟡 Moderate Impact";
}
else{
rating = "🔴 High Impact Lifestyle";
}

document.getElementById("rating").innerHTML =
rating;

document.getElementById("progressBar").style.width =
ecoScore + "%";

let trees =
Math.max(1, Math.ceil(footprint / 22));

document.getElementById("treeCount").innerHTML =
trees + " Trees";

let forest = "";

for(let i=0;i<Math.min(trees,25);i++){
forest += "🌳";
}

document.getElementById("forestView").innerHTML =
forest;

if(footprint < 100){

document.getElementById("futureEarth").innerHTML =
"🟢 Sustainable Lifestyle<br>🌍 Estimated Climate Impact: +1.5°C";

}
else if(footprint < 250){

document.getElementById("futureEarth").innerHTML =
"🟡 Moderate Lifestyle<br>🌍 Estimated Climate Impact: +2.3°C";

}
else{

document.getElementById("futureEarth").innerHTML =
"🔴 High Impact Lifestyle<br>🌍 Estimated Climate Impact: +3.5°C";

}

localStorage.setItem(
"carbonFootprint",
footprint
);

createChart(footprint);

}

function generateTip(){

const tips=[

"Switch to LED lighting.",
"Use public transport more often.",
"Carry reusable bags.",
"Reduce food waste.",
"Plant a tree every year.",
"Unplug chargers when unused.",
"Take shorter showers.",
"Use energy-efficient appliances.",
"Choose cycling for short trips.",
"Reduce plastic consumption."

];

let randomTip =
tips[Math.floor(Math.random()*tips.length)];

document.getElementById("ecoTip").innerHTML =
randomTip;

}

function askBot(){

let question =
document.getElementById("question")
.value.toLowerCase();

let answer =
"Try reducing energy usage and adopting greener habits.";

if(question.includes("electricity")){

answer =
"Use LED bulbs, switch off appliances and avoid standby power.";

}
else if(question.includes("transport")){

answer =
"Walk, cycle or use public transport whenever possible.";

}
else if(question.includes("water")){

answer =
"Fix leaks and take shorter showers.";

}
else if(question.includes("tree")){

answer =
"Trees absorb CO₂ and improve air quality.";

}

document.getElementById("answer")
.innerHTML = answer;

}

function createChart(value){

const ctx =
document.getElementById("carbonChart");

if(chartCreated){
return;
}

new Chart(ctx,{

type:'line',

data:{

labels:[
'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun'
],

datasets:[{

label:'Carbon Usage',

data:[
value0.8,
value0.9,
value,
value0.7,
value0.6,
value*0.5
],

fill:false

}]

}

});

chartCreated=true;

}

window.onload = function(){

let saved =
localStorage.getItem(
"carbonFootprint"
);

if(saved){

document.getElementById("result").innerHTML =
saved + " kg CO₂";

}

}