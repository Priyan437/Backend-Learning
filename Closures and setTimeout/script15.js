/* CLOSURES:

closure = A function defined inside of another function,
          the inner function has access to the variables
          and scope of the outer function.
          
          Allow for private variables and state maintanance
          used frequently in JS Framework: React, Vue, Angular */

const temp = 289; // Since inner is an inner function it considers 
                    // its outer function is global and do not get 
                    // main global temp value.

function outer(){
    const temp = 256;

    function inner(){
        console.log(temp);
    }

    inner();
}

outer();


// Counter 

function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getcount(){
        return count;
    }

    return {increment,getcount};
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`${counter.getcount()}`);

 /*-------------------------setTimeout-------------------
 
 setTimeout() = function in Javascript that allows you to schedule the
                execution of a function after an amount of time (millisecond)
                Times are approximate (vaies based on the workload of the JavaScript runtime env.)

                setTimeout(callback, delay);
 */

function hello(){
   //window.alert("Hello!");
}
setTimeout(hello(),1000); 

// setTimeout(() => window.alert("Hi"),3000) 

// setTimeout(callback, delay);
//clearTimeout(timeoutId) =  can cancel a timeout before it triggers.

const timeoutId = setTimeout(() => window.alert("Hi"),3000);
clearTimeout(timeoutId);
