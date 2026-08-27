const PasswordLength = 4;
const includeLowerCase = false;
const includeUpperCase = true;
const includeNumber = false;
const includeSymbols = false;

function PasswordGenerator(PasswordLength,
                           includeUpperCase, 
                           includeLowerCase, 
                           includeNumber,
                           includeSymbols){
    
    const LowerCase = "abcdefghijklmnopqrstuvwxyz";
    const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Nums = "1234567890";
    const symbols = "!@#$%^&*()_+-=";
    
    let allowedCharacter = "";
    let Password = "";

    allowedCharacter += includeLowerCase == true ? LowerCase : ""; 
    allowedCharacter += includeUpperCase == true ? UpperCase : ""; 
    allowedCharacter += includeNumber == true ? Nums : ""; 
    allowedCharacter += includeSymbols = false ? symbols : ""; 
    
    if(PasswordLength <= 0){
        return "Password Length must be greater than equal to 1";
    }
    else if(allowedCharacter.length == 0){
        return "Any one set of Characters must be selected";
    }

    for(let i = 0; i<PasswordLength; i++){
        let rand = Math.floor(Math.random() * allowedCharacter.length);
        Password += allowedCharacter[rand];
    }

    return Password;
}

const password = PasswordGenerator(PasswordLength,
                           includeUpperCase, 
                           includeLowerCase, 
                           includeNumber, 
                           includeSymbols);

console.log(`Password Generated : ${password}`);