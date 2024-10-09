function trackInteraction(action){
   
    function sendserver(){
        const server=action;
        console.log(`This is server received this data ${server}`);
    }
    
    setTimeout(sendserver, 3000);

}
trackInteraction("clicked");
trackInteraction("page view");
trackInteraction("signout");
