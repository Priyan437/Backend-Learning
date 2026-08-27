// Dice Roller

function DiceRoller(){

    const numDice = document.getElementById("num");
    const result = document.getElementById("diceResult");
    const imResult = document.getElementById("diceImages");
    let N = Number(numDice.value);
    const values = [];
    const inamges = []; let c = 0;

    for(let i = 0; i < N; i++){
        const value = Math.floor(1 + 6 * Math.random());
        values.push(value);
        inamges.push(`<img src = "${value}.png" alt = "${value} Dice Image">`); 
        c++;
    }
    console.log(values);
    console.log(inamges);
    console.log(c);
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = inamges.join('');

}