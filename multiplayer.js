class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    // Method to collect a coin
    collectCoin() {
        console.log(`${this.name} collected a coin! Validating...`);
        
        // Simulate server validation delay (2 seconds)
        setTimeout(() => {
            this.updateScore(1); // Update score after delay
        }, 2000);
    }

    // Method to update the player's score
    updateScore(points) {
        this.score += points;
        console.log(`${this.name}'s score is now: ${this.score}`);
    }
}

// Game timer function (simulates race against time)
function startGame(player, gameDuration) {
    let timeLeft = gameDuration;
    console.log(`Game started! ${player.name} has ${timeLeft} seconds to collect coins.`);

    const timer = setInterval(() => {
        timeLeft--;
        console.log(`Time left: ${timeLeft} seconds`);

        if (timeLeft <= 0) {
            clearInterval(timer);
            console.log(`${player.name}'s final score is: ${player.score}`);
        }
    }, 1000);
}

// Create a player and start the game with a 10-second timer
const player1 = new Player("Player1");
startGame(player1, 10);

// Simulate collecting coins at intervals
setTimeout(() => player1.collectCoin(), 1000);  // Collect after 1 second
setTimeout(() => player1.collectCoin(), 3000);  // Collect after 3 seconds
setTimeout(() => player1.collectCoin(), 7000);  // Collect after 7 seconds
