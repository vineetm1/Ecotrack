function calculateFootprint() {

let electricity =
Number(document.getElementById("electricity").value);

let vehicle =
Number(document.getElementById("vehicle").value);

let lpg =
Number(document.getElementById("lpg").value);

let footprint =
(electricity * 0.82) +
(vehicle * 0.12) +
(lpg * 42);

footprint = footprint.toFixed(2);

document.getElementById("result").innerHTML =
footprint + " kg CO₂";

let rating = "";
let suggestions = [];

if (footprint < 100) {

rating = "🟢 Excellent! Low Carbon Footprint";

suggestions = [
"Continue using sustainable habits.",
"Encourage others to reduce emissions.",
"Plant more trees."
];

}
else if (footprint < 250) {

rating = "🟡 Moderate Carbon Footprint";

suggestions = [
"Reduce unnecessary electricity usage.",
"Use public transportation.",
"Switch to LED lighting."
];

}
else {

rating = "🔴 High Carbon Footprint";

suggestions = [
"Use renewable energy if possible.",
"Reduce private vehicle usage.",
"Limit AC usage.",
"Adopt energy-efficient appliances.",
"Plant trees regularly."
];

}

document.getElementById("rating").innerHTML = rating;

let suggestionHTML = "";

suggestions.forEach(item => {
suggestionHTML += `<li>${item}</li>`;
});

document.getElementById("suggestions").innerHTML =
suggestionHTML;

let target = 100;

let reduction =
Math.max(0, footprint - target);

document.getElementById("target").innerHTML =
"Target: 100 kg CO₂ | Reduction Needed: " +
reduction.toFixed(2) + " kg";

let progress =
Math.min((footprint / 500) * 100, 100);

document.getElementById("progressBar").style.width =
progress + "%";
}

function generateTip() {

const tips = [

"Turn off lights when not in use.",
"Walk or cycle for short distances.",
"Use reusable shopping bags.",
"Reduce food waste.",
"Switch to LED bulbs.",
"Use public transportation.",
"Plant at least one tree every year.",
"Unplug chargers when not in use.",
"Use energy-efficient appliances.",
"Save water whenever possible."

];

const randomTip =
tips[Math.floor(Math.random() * tips.length)];

document.getElementById("ecoTip").innerHTML =
randomTip;
}