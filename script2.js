let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
    buttons.forEach((button) =>  button.addEventListener('click', playRound)); 
    
    function playRound(e) {

        

        const playerSelection = e.target.id;
        const computerSelection = getCompChoice();

        updateScore(getWinner(playerSelection, computerSelection));
        updateChoice(playerSelection, computerSelection);
        gameOver();

        function updateChoice(playerSelection, computerSelection){
           const playerChoiceText = document.getElementById("player-choice");
           const computerChoiceText = document.getElementById("computer-choice");

           playerChoiceText.textContent = "You chose: " + playerSelection;
           computerChoiceText.textContent = "Computer chose: " + computerSelection;
            
        }

        function gameOver(){
            if(playerScore >= 5 || computerScore >= 5){
                alert("Game over! Refresh page to play again!")
            }
        }
        

        function getCompChoice() {
            var moves = ["rock", "paper", "scissors"]
            compChoice = moves[Math.floor(Math.random()*moves.length)];
            return compChoice;
        }


        function getWinner(playerSelection, computerSelection){

            if(
                (playerSelection == "rock" && computerSelection == "scissors") ||
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissors" && computerSelection == "paper")
            ){
                return "player"
            }

            else if (
                (playerSelection == "rock" && computerSelection == "paper") ||
                (playerSelection == "paper" && computerSelection == "scissors") ||
                (playerSelection == "scissors" && computerSelection == "rock")
            ){
                return "computer"
            }

            else if(playerSelection == computerSelection){
                return "tie"
            }

            else{
                return "weirdness"
            }
        }

        function updateScore(winner){
            const playerScoreText = document.getElementById("player-score");
            const computerScoreText = document.getElementById("computer-score");
            const scoreHeadingText = document.getElementById("scoreboard-heading");
            
            if(winner === "tie"){
                scoreHeadingText.textContent = "It's a tie!";
            }

            if(winner === "player"){
                scoreHeadingText.textContent = "You win!";
                playerScore++;
                playerScoreText.textContent = " Player: " + playerScore;
            }

            if(winner === "computer"){
                scoreHeadingText.textContent = "You lose!";
                computerScore++;
                computerScoreText.textContent  = "Computer: " + computerScore;
            }
        }
    }
    
