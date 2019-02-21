/* Global Variables */
const wins = 0;
const losses = 0;
const targetMin = 19;
const targetMax = 120;
const crystalMin = 1;
const crystalMax = 12;
const runningTotal = 0;
const crystalImg = ["../images/crystal-1.jpg", "../images/crystal-2.jpg",
                    "../images/crystal-3.jpg", "../images/crystal-4.jpg"]

/* Random value generators */
const randomGoal = Math.floor(Math.random() * (+ targetMax - +targetMin)) + targetMin;
const randomCrystal = Math.floor(Math.random() * (+ crystalMax - +crystalMin)) + crystalMin;
console.log(randomGoal);
console.log(randomCrystal);


/* Fills in the target score to hit */
$(".randomNum").text(randomGoal);

// FUNCTIONS
function resetGame()  {
    $(".randomNum").text(randomGoal);
    $("#winText").text("");
    $("#lossText").text("");
    $(".total").text("");
    runningTotal = 0;
    // crystalSetup();
}

/* Create crystal images dynamically, assigning values to each 
function(crystalSetup) {
    for (var i = 0; i < 4; i++) {
        // Create crystal images
        var imageCrystal = $("<img>");
        // Apply CSS to images
        imageCrystal.addclass("crystal");
        // Choose picture from array above
        imageCrystal.attr("src", crystalImg[i]);
        // Assign random generated value to images
        imageCrystal.attr("valueCrystal", (Math.floor(Math.random() * (+ crystalMax - +crystalMin)) + crystalMin));
        // Add images to HTML div
        $(".crystals").append(imageCrystal);
    }
} */

/* Clicking the crystals */
$("#crystal").click(function() {
    // Determining crystal's value by extracting data from the attribute above, 
    // using 'this' to distinguish between crystals as they're clicked.
    var crystalValue = ($(this).attr("crystalValue"));
    
    crystalValue = parseInt(crystalValue);

    runningTotal += crystalValue;

    $(".total").text(runningTotal);

    // Conditions
    if (runningTotal === randomGoal) {
        wins++;
        $("#winText").text("You win!");
        resetGame();
    } else if (runningTotal >= randomGoal) {
        losses++;
        $("#lossText").text("You lose :(");
        resetGame();
    }
});