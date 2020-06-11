import validator from './validator.js';

document.getElementById('botonEnviar').addEventListener('click',  getInputCardValue);

function getInputCardValue() {
  // document.getElementById('cuadros').style.display('none');
  // document.getElementById('vista2').style.display('block');
  let creditCardNumber = document.getElementById('cardNumber').value;

  let respuestaIsvalid= validator.isValid(creditCardNumber);
    if (respuestaIsvalid==true){
      document.getElementById('rtaIsvalid').value=respuestaIsvalid;
       }
      else{
       document.getElementById('rtaIsvalid').value=respuestaIsvalid;
         } 
  let enmascarar=validator.maskify(creditCardNumber);
    document.getElementById('respuestaMaskify').innerHTML=enmascarar;
    // ("Su número de tarjeta: ")Mensaje numero enmascarado
       
   }
