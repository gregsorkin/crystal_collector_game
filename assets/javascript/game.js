/* Global Variables */
let wins = 0;
let losses = 0;
const targetMin = 19;
const targetMax = 120;
const crystalMin = 1;
const crystalMax = 12;
let runningTotal = 0;

/* Random value generators */
    // Chooses between 19 and 120:
let randomGoal = Math.floor(Math.random() * (+ targetMax - +targetMin)) + targetMin;
    // Chooses between 1 and 12:
let crystalOne = Math.floor(Math.random() * (+ crystalMax - +crystalMin)) + crystalMin;
let crystalTwo = Math.floor(Math.random() * (+ crystalMax - +crystalMin)) + crystalMin;
let crystalThree = Math.floor(Math.random() * (+ crystalMax - +crystalMin)) + crystalMin;
let crystalFour = Math.floor(Math.random() * (+ crystalMax - +crystalMin)) + crystalMin;


/* Fills in the target score to hit */
$(".randomNum").text(randomGoal);

// FUNCTIONS

/* Chooses new values for the target score and crystals, empties the You Win/You Lose strings; resets the user score to 0. */
function resetGame() {
    randomGoal = Math.floor(Math.random() * (+ targetMax - +targetMin)) + targetMin;
    $(".randomNum").text(randomGoal);
    // $("#youWinYouLose").text("");
    // $("#winText").text("");
    // $("#lossText").text("");
    $(".total").text("");
    crystalOne = Math.floor(Math.random() * (+ crystalMax - +crystalMin)) + crystalMin;
    crystalTwo = Math.floor(Math.random() * (+ crystalMax - +crystalMin)) + crystalMin;
    crystalThree = Math.floor(Math.random() * (+ crystalMax - +crystalMin)) + crystalMin;
    crystalFour = Math.floor(Math.random() * (+ crystalMax - +crystalMin)) + crystalMin;
    runningTotal = 0;
}

/* Clicking the crystals */
    // Crystal #1
$("#crystalOne").click(function() {
    runningTotal = runningTotal + crystalOne;
    $(".total").text(runningTotal);
    // Conditions
    if (runningTotal === randomGoal) {
        wins++;
        $("#youWinYouLose").text("You win!");
        $("#winsText").text(wins);
        resetGame();
    } else if (runningTotal >= randomGoal) {
        losses++;
        $("#youWinYouLose").text("You lose :(");
        $("#lossText").text(losses);
        resetGame();
    }
});

    // Crystal #2
$("#crystalTwo").click(function() {
    runningTotal = runningTotal + crystalTwo;
    $(".total").text(runningTotal);
    // Conditions
    if (runningTotal === randomGoal) {
        wins++;
        $("#youWinYouLose").text("You win!");
        $("#winsText").text(wins);
        resetGame();
    } else if (runningTotal >= randomGoal) {
        losses++;
        $("#youWinYouLose").text("You lose :(");
        $("#lossText").text(losses);
        resetGame();
    }
});

    // Crystal #3
$("#crystalThree").click(function() {
    runningTotal = runningTotal + crystalThree;
    $(".total").text(runningTotal);
    // Conditions
    if (runningTotal === randomGoal) {
        wins++;
        $("#youWinYouLose").text("You win!");
        $("#winsText").text(wins);
        resetGame();
    } else if (runningTotal >= randomGoal) {
        losses++;
        $("#youWinYouLose").text("You lose :(");
        $("#lossText").text(losses);
        resetGame();
    }
});

    // Crystal #4
$("#crystalFour").click(function() {
    runningTotal = runningTotal + crystalFour;
    $(".total").text(runningTotal);
    // Conditions
    if (runningTotal === randomGoal) {
        wins++;
        $("#youWinYouLose").text("You win!");
        $("#winsText").text(wins);
        resetGame();
    } else if (runningTotal >= randomGoal) {
        losses++;
        $("#youWinYouLose").text("You lose :(");
        $("#lossText").text(losses);
        resetGame();
    }
});

/* Future Edits */
// 1. Get the 4 crystals to work with more efficient code. One function to handle it all.