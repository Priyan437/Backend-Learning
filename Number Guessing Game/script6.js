let running = true;
 
while(running){
guess = window.prompt("Enter any Number between 0 and 100");

if(guess == "exit") {
    window.alert("You have exited the Game");
    break;
}

guess = Number(guess);

if(isNaN(guess) || guess>100 || guess<0) 
    {window.alert("Please enter a valid Number.");
    window.prompt("Please enter a valid Number.");}

let num = Math.random();
let gen = Math.floor(0 + num * 101);

if(guess == gen){
    window.alert("You won the game");
    running = false;
}

}

