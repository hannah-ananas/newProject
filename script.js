const randomMessages = ['Chuck Norris once cleared the tower to land', 
        'There are no Chuck Norris pilot jokes. Everything is real.', 
        'When Chuck Norris flies, there are no Air Traffic Controllers; only Suggesters.',
        'Chuck Norris pitot tube is a .50 Cal.', 
        'Chuck Norris was once told to ident. The controller was greeted with a fist coming out of his radar screen.', 
        'Chuck Norris once shot down three enemy aircraft with his aux fuel tank.',
        'Chuck Norris doesn\’t shoot approaches…he kills them.',
        'Chuck Yeager broke the sound barrier with his Bell X-1 Jet. Chuck Norris broke the sound barrier with his fist.',
        'Chuck Norris doesn\’t have headwinds… the wind is always running away from Chuck Norris.',
        'Chuck Norris has never landed with a crosswind. The wind doesn\'t dare cross Chuck Norris.',
        'When Chuck Norris flies, the altimeter setting is 00.00. Chuck Norris is never under pressure.',
        'Chuck Norris is the only person ever to land on runway 37.',
        'Chuck Norris doesn’t request clearances, he states intentions.'];
console.log(randomMessages.length);
//console.log(randomMessages);
function randomOutput(array){
        let randomIndex = Math.floor(Math.random()* array.length);
        let printOut = array[randomIndex];
        console.log(printOut);

}
randomOutput(randomMessages);
// node script.js