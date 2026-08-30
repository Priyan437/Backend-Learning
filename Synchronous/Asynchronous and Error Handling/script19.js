// Synchronous = Executes line by line consecutively in a 
//               sequential manner Code that waits for an 
//               operation to complete.

// Asynchronous = Allows multiple operations to be performed concurrently 
//                without waiting Doesn't block the execution flow and allow
//                the program to continue (I/O Operations, 
//                Network Requests, Fetching Data,
//                Handled with : Callbacks, Promises, Async/Await);

//-------------------- Callbacks----------------------

function func1(){
    setTimeout(() => console.log("Task 1") , 3000);
}
 func1();
 console.log("Task 2");
 console.log("Task 3");
 console.log("Task 4");  // This is an example of Asynchronous code.

 // Now, we will handle Asynchronous code with the Callbacks--

 function func3(callback){
    setTimeout(() => {console.log("Task 1");
                callback()} , 3000);
}

function func2(){
 console.log("Task 2");
 console.log("Task 3");
 console.log("Task 4"); 
}

func3(func2);