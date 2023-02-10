function computerPlay(){
    const options = ["ROCK", "PAPER", "SCISSORS"];
    let random_index = Math.floor(Math.random() * options.length);
    return options[random_index];
}

function playRound(computer_selection, player_selection)
{
    player_selection = player_selection.toUpperCase().trim();

    if (player_selection === computer_selection){
        return "D!";
    } else if ((player_selection === "ROCK") && (computer_selection === "SCISSORS")){
        return "W";
    } else if ((player_selection === "ROCK") && (computer_selection === "PAPER")){
        return "L";
    } else if ((player_selection === "SCISSORS") && (computer_selection === "ROCK")){
        return "L";
    } else if ((player_selection === "SCISSORS") && (computer_selection === "PAPER")){
        return "W";
    } else if ((player_selection === "PAPER") && (computer_selection === "SCISSORS")){
        return "L";
    } else if ((player_selection === "PAPER") && (computer_selection === "ROCK")){
        return "W";
    }
}

function game(){
    let computer_score = 0, 
        player_score = 0, 
        output_message = "";

    for (let i = 0; i < 5; i++){
        player_selection = prompt("Enter Option: (Rock, Paper, Scissors)");
        round_message = playRound(computerPlay(), player_selection);

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
    
    console.log(output_message)
    if (player_score > computer_score){
        console.log("PLAYER WINS!");
    } else if (computer_score > player_score){
        console.log("COMPUTER WINS!")
    } else {
        console.log("PLAYER AND COMPUTER DRAWS!")
    }
}

game();