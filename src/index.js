import {validator} from './validator.js';

document.getElementById('botonEnviar').addEventListener('click',  getInputCardValue);

function getInputCardValue() {
    const creditCardNumber = document.getElementById("creditCardNumber").value;
    document.getElementById('cuadros').style.display('none');
    document.getElementById('vista2').style.display("block");
    let enmascarar=validator.maskify('creditCardNumber');
    // ("Su número de tarjeta: ")Mensaje numero enmascarado
     let respuestaIsvalid= validator.isValid('creditCardNumber');
      if (respuestaIsvalid==true){
        //mesaje de validación exitosa
          }
         else{
        // Mensaje de validación de no valida
             }    
   }
