// optellen
var plafond = 0;
while(plafond < 11) {
    console.log("we hebben nog ruimte");
    plafond++;
}

// // Hetzelfde maar dan sneller
// do {

// } while ( );

var a = 6;

// eerste notatiewijze, wordt ge-hoist
function optellen (a, b) {
    // hier
    return a + b;
}
console.log(optellen(2,3)); // 5

// tweede notatiewijze
var machtverheffen = function (base, exponent) {
    var resultaat = 1;
    for( var i=0; i<exponent; i++) {
        resultaat *= base;
    }
    return resultaat;
};

console.log(machtverheffen(2,4)); // 16

// een eenvoudiger functie
var zegHoi = function(naam) {
    console.log('Hoi '+naam);
};

zegHoi("Walter"); // Hoi Walter;

// functies in elkaars verlengde!!
var kwadrateer = function (getal) {
    return machtverheffen(getal, 2);
};

console.log(kwadrateer(2)); // 4

//
//

var eenvar = "A";

function setVarToB() {
    eenvar = "B";
}

setVarToB();
console.log(eenvar); // B

function setVarToC() {
    var eenvar;
    eenvar = "C";
}

setVarToC();
console.log(eenvar); // B



/// Huiswerk voor volgende keer
// codecademy track 3 en 4
// eloquent javascript, hst 2 - functions (closures overslaan)
// schrijf een functie (willekeurig) met daarin een beslissingsstructuur














