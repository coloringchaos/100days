function myFunction() {
    var x = document.getElementById("noun").value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
    console.log(x);
}
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
    console.log(x);
}

// alert("mad libs");
// var explanation = prompt("explanation");
// var noun1 = prompt("noun");
// var numYrs = prompt("number of years");
// var adj1 = prompt("adjective");
// var noun2 = prompt("noun");
// var verb1 = prompt("explanation");
var adj2;
var goal;
var noun3;
var verb2;
var noun4;
var badDecision;
var plNoun;
var adj3;
var noun5;
var noun6;
var yourName;

// document.write(explanation + " Stella! You finally graduated from Law " + (noun1) + ". Now that you've completed " + (numYrs) + " years of " + (adj1) + "  " + (noun2) + ", It's time to  " + (verb1) + " . ");

/*
I'll never forget the time I ate (number) Magic mushrooms! My friend (name of person) turned into a (animal). And we flew over (location) on a (adjective) (noun). I was seeing (color) and green (animal, plural) everywhere. We decided to go skiing on a (color) mountain. Called the (adjective) (noun) where we later joined a (celebrity name) fan club but everyone turned into (noun - plural). We were surrounded but escaped (adverb) with the help of a (adjective) (noun). I know, crazy. (explanation) he shouted. After hours of (verb, present ends in ing) everything went back to normal but then I saw (celebrity name) yelling to a (noun) orchestra. (exclamation) I cried out.
*/