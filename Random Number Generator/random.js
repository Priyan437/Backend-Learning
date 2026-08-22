// let r = Math.random();
// let m = 100 + (200-100) * r;
// console.log(r);
// console.log(m);

document.getElementById("Butto").onclick = function(){
    let m = Math.random();
    let dice = Math.floor(1 + (6 * m));
    document.getElementById("show").textContent = dice;
};

