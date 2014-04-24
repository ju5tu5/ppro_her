
// object console, verwijzing naar de console in de browser
// functie op console, de functie log, deze wordt gebruikt om info naar console te sturen
// () argumenten meegeven aan een functie
// de waarde "foobar" (type string)
var print = function (str) {
    console.log(str);
};


console.log("foobar");
// functies worden gebruikt voor hergebruik en korter maken van code.
print("foobar");


// f(x) = x+1

// voor x:1 = 2
// voor x:2 = 3

// specifieke namen
// justus -> verwijst naar 'le moi'

// universele namen
// tafel -> alle objecten van het type tafel

// String - stukje tekst tussen aanhalingstekens
// Number - getal, 2,3,4 maar ook 4.5, 5.2
// Boolean - true, false
// Object - alle andere dingen
// Function - ook een datatype!

var zegHallo = "Hallo";
    zegHallo = "Hi";

// Afhankelijk van het datatype kan je functies op een object (variabele) aanroepen
//zegHallo.length();

var leeftijd = 35;

var lichtAan = true;

var foo = console;

var test = function () {
    return 'getest!';
};

test = function () {
    if(testGelukt()){
        return true;
    }else{
        return false;
    }
};

// **** Control flow ****
//      true
if(lichtAan === true) {
    console.log('Het licht staat aan!');
}
// if(true)

if(lichtAan === true && leeftijd < 40) {
    console.log('Het licht staat aan!');
}
// if(true && true)
// if(true)

if(lichtAan === true || leeftijd > 40) {
    console.log('Het licht staat aan!');
}
// if(true || false)
// if(true)

// EXTRA INFO BIJ VERGELIJKINGEN
//  == vergelijkt de inhoud
//  === vergelijkt inhoud EN datatype
//
//  && en operator, levert waar op als beide kanten waar zijn
//  || of operator, levert waar op als een van beide kanten waar is


// LOOPS
var aantalKeer = 5;

while(aantalKeer > 0) {
    console.log('stukje tekst');
    aantalKeer--;
}

//       true
// while(5 > 0) -> stukje tekst, waarde wordt 4
//       true
// while(4 > 0) -> stukje tekst, waarde wordt 3
//       true
// while(3 > 0) -> stukje tekst, waarde wordt 2
//       true
// while(2 > 0) -> stukje tekst, waarde wordt 1
//       true
// while(1 > 0) -> stukje tekst, waarde wordt 0
//       false
// while(0 > 0), hier stopt de loop

// to increment, er een vaste waarde bij optellen
// to decrement, er een vaste waarde aftrekken
//

for(var i = 5; i > 0; i--){
    console.log('stukje tekst');
}

// for (i=5; 5>0; i=4) -> stukje tekst
// for (i=5; 4>0; i=3) -> stukje tekst
// for (i=5; 3>0; i=2) -> stukje tekst
// for (i=5; 2>0; i=1) -> stukje tekst
// for (i=5; 1>0; i=0) -> stukje tekst
// for (i=5; 0>0;) hier stopt de loop


// optellen
var plafond = 0;
while(plafond < 11) {
    console.log("we hebben nog ruimte");
    plafond++;
}


for(var j = 0; j < 11; j++) {
    console.log("we hebben nog ruimte");
}



