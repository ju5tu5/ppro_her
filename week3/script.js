
// Hst. 2 Functions (closures, purity, recursion overslaan)

var maakOpteller = function (getal1) {
    return function (getal2) {
        return getal1 + getal2;
    };
};

var telErDrieBijOp = maakOpteller(3);

// var telErDrieBijOp = function (getal2) {
//     return 3 + getal2;
// };

console.log(telErDrieBijOp(2)); // 5

// voorbeeld choose your own adventure..

// var naam = prompt("Wat is je naam?");

// if(naam === "Justus") {
//     console.log("Dag docent..");
// }else{
//     console.log("Dag student..");
// }

// DOM aanspreken

// De tekst in een alert toevoegen
console.log(document.getElementById("dediv").innerHTML);

var mijnDiv = document.getElementById("dediv");
mijnDiv.innerHTML = "Dit is de nieuwe tekst op deze div.";

var header = document.createElement("h1");
//header.innerHTML = "Whee een header!!!11oneone"; // manier 1
var headerTekst = document.createTextNode("Whee een header!!!11oneone");
header.appendChild(headerTekst);

mijnDiv.appendChild(header);

//document.body.appendChild(header);

// DOM aanspreken, maar nu met functies

var dom = function(name) {
    var node = document.createElement(name);
    return node;
};

var addTextToNode = function(text, node) {
    var t = document.createTextNode(text);
    node.appendChild(t);
};

var appendToBody = function(element) {
    document.body.appendChild(element);
};


var header2 = dom("h1");
addTextToNode("Wat een mooie kop", header2);
appendToBody(header2);

// codecademy: track 5/6
// chapter 2: Functions uit eloquent programming (link in de chat)
// chapter 10: dom manipulatie (optioneel)


