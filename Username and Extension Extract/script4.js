const Button = document.getElementById("submit");

Button.onclick = function(){
    let d = document.getElementById("hi").value;
    let user = d.slice(0,d.indexOf("@"));
    let extension = d.slice(d.indexOf("@")+1);
    document.getElementById("user").textContent = `Your username is ${user}`;
    document.getElementById("ext").textContent = `Your Extension is ${extension}`;
}