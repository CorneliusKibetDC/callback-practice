
function initiategame(){
    function attack(){
        const max=20;
        const min=1;
        const points = Math.random()*(max-min+1) + min;
       
        let i=50;

        for(; i>0; i-=points){
            let p=i;
            console.log(`bar is at ${p}`);
        };
        console.log("The other player has won");

    }
    attack();
}
initiategame();
