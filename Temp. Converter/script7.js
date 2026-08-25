const inputemp = document.getElementById("BoxInput")
const c2f = document.getElementById("check1")
const f2c = document.getElementById("check2")
const submit = document.getElementById("submit")
const result = document.getElementById("result")


function Converter(){
    let temp = inputemp.value;
temp = Number(temp);
    if(c2f.checked){
        let m = ((9/5)*temp + 32);
        result.textContent = `${m} Celsius`;
    }
    else if(f2c.checked){
        let m = ((5/9)*(temp - 32));
        result.textContent = `${m} Farhenheit`;
    }
    else{
        result.textContent = `Please select a Converting section`
    }

}