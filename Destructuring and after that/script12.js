/* destructuring = extract values from array and objects,
                   then assign them to variables in a convenient way
                   [] = to perform array destructuring.
                   {} = to perform Object destructuring. */

//Ex 1 - swapping the values of two variables.

let a = 45;
let b = 89;

console.log(a);
console.log(b);

[a , b] = [b, a];

console.log(a);
console.log(b);

//Ex 2 - swapping the elements of an array.
  
let colors = ["red","green","blue","Ca"];
console.log(colors);
[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors);

//Ex 3 - Assign Elements to variables

let colors2 = ["red","green","blue","Ca"];

const [first,second,...extra] = colors2;
console.log(first);
console.log(second);
console.log(extra);

// Extract Values from Objects -->

const person = {
    name: "Pritam",
    lastName: "Petro",
    age: 30,
    sayHello: () => console.log("hello")
}

const {name,lastName,age} = person;
console.log(name);
console.log(lastName);
console.log(age);

// Ex 4 - Destructure in Function Parameters.

function dis({name,lastName,age}){
    console.log(`${name} ${lastName} age is ${age}`);
}

dis(person);  // Here we have to pass object as an Function Parameters so we use
               // the Destructuring.


/* NESTED OBJECTS :

 nested objects = Objects inside of other objects. Allows you to represent
                  more complex data structures, Child Object is enclosed by a Parent Object.

                  Person{Address{}, ContactInfo{}}
                  shoppingCart{keyboard{}, Mouse{}, Moniter{}}
*/

const person4 = {
    name: "Pritam",
    lastName: "Petro",
    age: 30,
    address: {
       street: "124 Counch Street",
       city: "Haland",
       country: "Uzbekistan"
    }
}

console.log(person4.name);
console.log(person4.lastName);
console.log(person4.address);
console.log(person4.address.country);

// Array of Objects.

const frui = [
              {name:"Arun", YOB:'2006'},
              {name:"Madhav", YOB:'2008'},
              {name:"Srijon", YOB:'2002'}]

console.log(frui[0].name);
console.log(frui[1].YOB);


// -----------forEach Method---------------
frui.forEach(fruit2 => console.log(fruit2.name));

//------------map Method------------------- It gives a new array.
const fruitna = frui.map(fruit1 => fruit1.YOB);
console.log(fruitna);  

//------------reduce Method---------------
const mini = frui.reduce((min,Year) => Year.YOB < min.YOB ? Year : min);
const maxi = frui.reduce((max,Year) => Year.YOB > max.YOB ? Year : max);

console.log(mini);
console.log(maxi);


// Important .......

/*  sort() =  method used to dort elements of an array in
              sorts elements as strings in lexicographic order.
              lexicographic = (alphabet + numbers + symbols)*/
              
              let numbers = [1,10,2,9,3,8,4,7,5,6];
              numbers.sort();  // Sorting will be performed with respect to string.
              console.log(numbers);

              numbers.sort((a,b) => a-b); // Sorting in the Ascending Order
              console.log(numbers);
            
              numbers.sort((a,b) => b-a); // Sorting in the Ascending Order
              console.log(numbers);
