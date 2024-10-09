// Simulated asynchronous game events
const encounterEnemy = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Encountered an enemy!");
            resolve();
        }, 1000); // Simulating a 1 second delay
    });
};

const defeatEnemy = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Defeated the enemy!");
            resolve();
        }, 1500); // Simulating a 1.5 seconds delay
    });
};

const collectLoot = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Collected loot from the enemy!");
            resolve();
        }, 1000); // Simulating a 1 second delay
    });
};

// Function to process events sequentially
const processGameEvents = async (events) => {
    for (const event of events) {
        await event(); // Wait for each event to complete
    }
};

// Array of events in the correct sequence
const gameEvents = [encounterEnemy, defeatEnemy, collectLoot];

// Start processing the game events
processGameEvents(gameEvents)
    .then(() => {
        console.log("All events processed successfully.");
    })
    .catch((error) => {
        console.error("An error occurred while processing events:", error);
    });