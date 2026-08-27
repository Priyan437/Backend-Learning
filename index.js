// console.log(`Hi I am there in Server`);
// console.log(`Debugg it brol`);

// window.alert("Hi I am here");
// window.alert("How is the Day");

// document.getElementById("hi").textContent = 'Hello I am there in the DOM';
// document.getElementById("para").textContent = 'HI erase all';

// let x;
// x = 100;

// console.log(x);

// let y = 200.3659;
// console.log(`Your value of Product is ${y}`);


// let firstName = 'Priyanshu';
// console.log(typeof firstName);

// let Online = true;
// console.log(typeof Online);

// let fullName = 'Priyanshu Kumar Thakur';
// let Age = 21;
// let isStudent = true;

// document.getElementById("p1").textContent = `His name is ${fullName}`;
// document.getElementById("p2").textContent = `His Age is ${Age}`;
// document.getElementById("p3").textContent = `Is Student: ${isStudent}`;

/* Augmented Assignment Operators */

// let x = 120;
// x += 10;
// x -= 100;
// x *= 2;
// x **= 2;

/* 
Operator Precedence
    
    Brackets
    Exponents
    Multiplications, Divisions, Modulo
    Addition, Subtractions 
    
    */


// // How to Accept User Input in the Java Script

// /* 1. Easy Way = Window Prompt.
//    2. Hard Way = HTML Text Box 
// */

// let username;
//1.
// username = window.prompt("Enter your Good Name");
// console.log(username);

//2.

// let username;

// document.getElementById("b").onclick = function(){
//     username = document.getElementById("Inputtext").value;
//     document.getElementById("hmm").textContent = `Hello Beloved ${username}`;
//     console.log(username);
// }

/* Code for finding the Area of the Circle


     let d;
     document.getElementById("b").onclick = function(){
        d = document.getElementById("Dia").value;
        let area = (3.14 * d**2)/4;
        document.getElementById("answer").textContent = `area of circle is ${area}`;
     };

   

     /* String Methods */

     /* let userName = "Priyanshu Kumar";
     let m = userName.charAt(8);
     let n = userName.indexOf("a")
     let o = userName.lastIndexOf("a")
     let l = userName.length;
     console.log(typeof(m));
     console.log(m);
     console.log(n);
     console.log(o);
     console.log(l) */

     let u = "Bro Code";
     console.log(u.slice(1,6));

     // ARRAY = A Variable like structure that can hold more
          // than 1 value.

        //   let fruits = ["Apple", "Banana", "Orange"]
        //   fruits[0] = "Guava";
        //   fruits.push("Grapes"); ## Last me add hoga.
        //   fruits.pop();          ## Last ka ek nikal jayega
        //   fruits.unshift("starting me add hoga.");
        
        //for(let i = 0; i<fruits.length; i++){
              //console.log(fruits[i]);
              //}

            //   for(let fruit of fruits){
            //     console.log(fruit);           ##Short Form of above For loop
            //   }
 
/*  SORTING OF AN ARRAY

    fruits.sort()  ## Sort in the Ascending Order.
    fruits.sort().reverse() ## sort in the descending reverse order.
*/


/* Spread Operators -->  ... allows an iterable such as an
                             array or string to be expanded into 
                             seperate elements (Unpack the elements)
                             
                             let numbers = [1,2,3,4,5,6,7,8,9] 
                             console.log(Maths.max(numbers))  ## It will give an error as each element is not individual.
                             
                             console.log(Maths.max(...numbers))  ##It will not give error as it is unpacked as each element individually.*/ 


/* rest Parameters --> (...rest) allow a function work with a variable
                        number of arguments by bundling them into an array
                        
                        spread = expands an array into seperable elements
                        rest = bundles seperate elements into an array.
                        
                        const food1 = "Maggi";
                        const food1 = "Chcolate";
                        const food1 = "Kitkat";
                        const food1 = "Icecream";
                        const food1 = "Cucumber";

                        function food(...fi){
                           return fi; 
                        }

                        const ans = food(food1, food2, food3, food4)
                        

                        ## we can put as many parametrs as we want.
                        */
                       
                        // If we don't know the Number of parameters which we have to input in
                        // the function then we take the help of the rest(...)

                        /* Callback =  a function that is passed as an argument 
                                       to another function.
                                       
                                       used to handle asynchronus operation:
                                       1. Reading a file.
                                       2. Networking Requests
                                       3.Interacting with databases*/ 

                        /*forEach() = method used to iterate over the elements 
                                      of an array and apply a specified function 
                                      (Callback) to each element 
                                      apply.forEach(callback)*/ 
