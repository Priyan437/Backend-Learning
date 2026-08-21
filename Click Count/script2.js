let x = 0;

document.getElementById("decrease").onclick = function(){
    x--;
    document.getElementById("lab").textContent = x;
}

document.getElementById("reset").onclick = function(){
    x=0;
    document.getElementById("lab").textContent = x;
}

document.getElementById("increase").onclick = function(){
    x++;
    document.getElementById("lab").textContent = x;
}