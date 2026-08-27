// Callback Function = Fumction that is executed inside another function that 
// is it is executed once that previous call function gets executed completely

 let a1 = [];
 let a2 = [];
 let a3 = [];
 let a4 = [];

Addtwo(displayAdd,8,78)

function Addtwo(callback, a ,b){
     let result = a + b;
     displayAdd(result);
}

function displayAdd(m){
    console.log(m);
}

let fruits = ['guava','grapes','mango'];
fruits.forEach(Upper);
 console.log(a1);
fruits.forEach(Lower);
 console.log(a2);
fruits.forEach(Capital);
 console.log(a3);
fruits.forEach(weird);
 console.log(a4);

function Upper(element, index){
    
     a1.push(element.toUpperCase());
    
}
function Lower(element, index){
    
     a2.push(element.toLowerCase());
     
}
function Capital(element, index){
     
     a3.push(element.charAt(0).toUpperCase() + element.slice(1));
  
}
function weird(element, index){
     
     a4.push(element.charAt(0).toLowerCase() + element.slice(1).toUpperCase());
    
}

// .map() = accepts a callback and applies that function.
//          to each element of an array, then returns a new array

const dates = ["25-10-2020","03-10-2001","08-09-2000"];
let formattedDates  = dates.map(DateConvertor);
console.log(formattedDates);

function DateConvertor(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}

// .filter() = creates a new array by filtering 
//             out elements.

const ages = [18,98,74,12,32,10,4,56,25,32,15,10];
child = ages.filter(ischildren);
adult = ages.filter(isadult);
old = ages.filter(isold);

function ischildren(element){
      return (element <= 10);
}

function isadult(element){
      return (element >= 18 && element < 50);
}

function isold(element){
      return (element >= 50);
}

console.log(child);
console.log(adult);
console.log(old);