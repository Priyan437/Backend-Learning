/* Error = An Object that is created to represent a problem 
           that occurs often with the user input or establishing 
           a connection.
           
   try { } = Encloses code that might pontentially cause an error.
   catch { } = Catch and handle any throw Errors from try { }
   finally { } = (optional) always executes. Used mostly for clean
                  up. ex - close files, close Connections, Release Resources.
*/

try{
    console.log(x);
    // Network Errors
    // Promise Rejection.
    // Security Errors.
}
catch(error){
    console.error(error);
}
finally{
    // Close Files
    // Close Connections
    // RFelease Resources
    console.log("This always executes");
}

console.log(" This is the End of Program");

// Input Error.

try{
    const dividend = Number(window.prompt("Enter the dividend!"));
    const divisor = Number(window.prompt("Enter the divisor!"));

    console.log(dividend);

    if(divisor == 0){
        throw new error("You can't divide a Number with 0!")
    }

    if(isNaN(dividend) || isNaN(divisor)){
        throw new error("Enter a vlaid Number.");
    }

    const result = dividend/divisor;
    console.log(result);
}
catch(error){
    console.error45(error);
}