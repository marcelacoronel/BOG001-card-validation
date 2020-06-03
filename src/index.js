//import validator from './validator.js';

function getInputCardValue(){
    
    const creditCardNumber = document.getElementById("creditCardNumber").value;
    const creditCardNumberString = creditCardNumber.toString(); //check de que es una string 
    const creditCardNumberArray = creditCardNumberString.split(); //check que es un array

    console.log(creditCardNumber);
    console.log(creditCardNumberString);

    console.log(creditCardNumberArray[0]);
    console.log(creditCardNumberArray[1]);
    console.log(creditCardNumberArray[2]);
    console.log(creditCardNumberArray[3]);

    return creditCardNumberArray;
}




//console.log(validator);
