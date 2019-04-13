var wins = 0;
var losses = 0;
var randomNumber;
var crystals;
var userTotal;

// function that generates random crystal values
function randomCrystals() {
    return {
        red: {
            value: Math.floor(Math.random() * 12) + 1,
            imageurl: "assets/images/red.png"
        },
        blue: {
            value: Math.floor(Math.random() * 12) + 1,
            imageurl: "assets/images/blue.jpg"
        },
        yellow: {
            value: Math.floor(Math.random() * 12) + 1,
            imageurl: "assets/images/yellow.png"
        },
        green: {
            value: Math.floor(Math.random() * 12) + 1,
            imageurl: "assets/images/green.jpg"
        }
    }
}

// resets the game
function setGame() {
    // generates randomCrystals values
    crystals = randomCrystals()
    // changes userTotal to 0
    userTotal = 0;
    // generates random number between 19 and 120
    randomNumber = Math.floor(Math.random() * 101) + 19
    $("#random-number").html(randomNumber)
}

// renders crystals visually onto the page
function renderCrystals() {
    for (var key in crystals) {
        var crystalDiv = $("<div class='crystal-button' data-name='" + key + "'>")
        var crystalImage = $("<image class='crystal-image'>").attr("src", crystals[key].imageurl)
        crystalDiv.append(crystalImage)
        $("#crystals").append(crystalDiv)
    }
    console.log(key)
}

// run functions
setGame()
randomCrystals()
renderCrystals()

// updates userTotal, wins, losses

$(".crystal-button").on("click", function (event) {
    if ($(this).data("name") === "red") {
        userTotal += crystals.red.value
    } else if ($(this).data("name") === "blue") {
        userTotal += crystals.blue.value
    } else if ($(this).data("name") === "green") {
        userTotal += crystals.green.value
    } else if ($(this).data("name") === "yellow") {
        userTotal += crystals.yellow.value
    }
    $("#score").html(userTotal)
    if (userTotal === randomNumber) {
        win();
    } else if (userTotal > randomNumber) {
        lose();
    }
})

// shows wins
function win() {
    alert("You win!");
    wins++;
    $('#wins').text("Wins: " + wins);
    setGame();
}

// shows losses
function lose() {
    alert("You lose!");
    losses++;
    $('#losses').text("Losses: " + losses);
    setGame()
}