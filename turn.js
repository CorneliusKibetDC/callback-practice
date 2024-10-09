let player1={
    name:"Player 1",
    health:100
}

let player2={
    name:"Player 2",
    health:100
}

function turnBasedBattle(player1,player2,callBack){
    const min=1
    const max=20
    const points1 = Math.random()*(max-min+1) + min; 
    const points2 = Math.random()*(max-min+1) + min; 
    player1.health=player1.health-points1
    player2.health=player2.health-points2
     if(player1.health>player2.health){
        callBack("Player 1")
        return
     }
     callBack("Player 2")

}

turnBasedBattle({ name: "Player 1", health: 100 },{ name: "Player 2", health: 100 } , function(winner) {
    console.log(winner); // Expected: "Player 1" or "Player 2" based on random damage
});
turnBasedBattle( { name: "Player 1", health: 20 },{ name: "Player 2", health: 100 } , function(winner) {
    console.log(winner); // Expected: "Player 2"
});