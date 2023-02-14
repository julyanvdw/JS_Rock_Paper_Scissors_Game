function computerPlay(){
    const options = ["ROCK", "PAPER", "SCISSORS"];
    let random_index = Math.floor(Math.random() * options.length);
    return options[random_index];
}

function playRound(computer_selection, player_selection)
{
    player_selection = player_selection.toUpperCase().trim();

    if (player_selection === computer_selection){
        console.log("DRAW");
        return "D!";
    } else if ((player_selection === "ROCK") && (computer_selection === "SCISSORS")){
        console.log("You WIN! - Rock beats Scissors");
        return "W";
    } else if ((player_selection === "ROCK") && (computer_selection === "PAPER")){
        console.log("You LOSE! - Paper beats Rock");
        return "L";
    } else if ((player_selection === "SCISSORS") && (computer_selection === "ROCK")){
        console.log("You LOSE! - Rock beats Scissors");
        return "L";
    } else if ((player_selection === "SCISSORS") && (computer_selection === "PAPER")){
        console.log("You WIN! - Scissors beats Paper");
        return "W";
    } else if ((player_selection === "PAPER") && (computer_selection === "SCISSORS")){
        console.log("You LOSE! - Scissors beats Paper"); 
        return "L";
    } else if ((player_selection === "PAPER") && (computer_selection === "ROCK")){
        console.log("You WIN! - Paper beats Rock");
        return "W";
    } else {
        console.log("Invalid Input - you lost this round");
        return "L";
    }
}

let computer_score = 0, 
        player_score = 0, 
        output_message = "";

function displayScores(){
    console.log(`GAME HISTORY - ${output_message}`)
    console.log(`PLAYER - ${player_score}`);
    console.log(`COMPUTER - ${computer_score}`);
    
    if (player_score > computer_score){
        console.log("PLAYER WINS!");
    } else if (computer_score > player_score){
        console.log("COMPUTER WINS!")
    } else {
        console.log("PLAYER AND COMPUTER DRAWS!")
    }
}

function checkInput(player_selection){
    if (player_selection === null){
        console.log("You Exited the game.");
        displayScores();
        return false;
    } else {
        return true; 
    }
}

function updateScores(round_message){
    if (round_message === "W"){
        player_score++;
        output_message += "W ";
    } else if (round_message === "L"){
        computer_score++;
        output_message += "L ";
    } else {
        player_score++;
        computer_score++;
        output_message += "D ";
    }
}

function newRound(){
    if (window.confirm("Do you want to play another round?")){
        computer_score = 0;
        player_score = 0;
        output_message = "";
        game();
    } else {
        alert("Thank you for playing!");
    }
}

function determineEnd(player_selection){
    if (player_selection != null){
        console.log("Game Over!");
        displayScores();
        newRound();
    } else {
        alert("Great Game! See you next time.");
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        player_selection = prompt("WELCOME TO ROCK, PAPER, SCISSORS - enter your option: (Rock, Paper, Scissors)");
        if (!checkInput(player_selection)){
            break;
        }
        console.log(`--- ROUND ${i + 1} ---`);
        updateScores(playRound(computerPlay(), player_selection));
    }
    determineEnd(player_selection);
}

game();