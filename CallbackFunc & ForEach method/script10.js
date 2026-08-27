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

// .reduce() = reduce the element of an array to a single value.

const grades = [75,80,96,74,65,45];

const maximu = grades.reduce(maximum);
const minimu = grades.reduce(minimum);

console.log(maximu);
console.log(minimu);

function maximum(accumulator, element){
    return Math.max(accumulator, element);
}

function minimum(accumulator, element){
    return Math.min(accumulator, element);
}

/* Function Expressions = a way yo define functions as 
                          values or variables.

        1. Callbacks in asynchronous operations.
        2. Higher-Order Functions.
        3. Closures.
        4. Event Listeners.
*/ 

const hello = function(){
    console.log(`Hello!`);  // Function is assigned a name that is a 
                            // function expressions.
                       }

setTimeout(function(){
    console.log(`Hello`);
}, 3000);

// Arrow Functions = a concise way to write function expressions good 
//                   for simple functions that you use only once.
//                   (parameters) => some code

const hello2 = () => console.log(`Hello`);
hello2();

const numbers = [5,6,8,7,12,45,65,89,78,32,1,25,65];

const s = numbers.map((element)=> Math.pow(element,2));
const c = numbers.map((element)=> Math.pow(element,3));
console.log(s)
console.log(c);