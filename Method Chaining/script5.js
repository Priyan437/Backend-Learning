// Method Chaining = Calling one method after another in one continuous Line of Code.

// ---- No Method Chaining ----

let Username = window.prompt("Enter Your Username");
Username = Username.trim();
let letter = Username.charAt(0);
letter = letter.toUpperCase();
let excess = Username.slice(1);
excess = excess.toLowerCase();

Username = letter + excess;
console.log(Username);


// ----  Method Chaining ----

 Username = Username.trim().charAt(0).toUpperCase() +
            Username.trim().slice(1).toLowerCase();

console.log(Username);




