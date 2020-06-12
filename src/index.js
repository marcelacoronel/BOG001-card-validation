import validator from './validator.js';

document.getElementById('botonEnviar').addEventListener('click',  getInputCardValue);

function getInputCardValue() {
 
  let creditCardNumber = document.getElementById('cardNumber').value;
  let respuestaIsvalid= validator.isValid(creditCardNumber);
  document.getElementById('rtaIsvalid').innerHTML=respuestaIsvalid;
  let enmascarar=validator.maskify(creditCardNumber);
  document.getElementById('respuestaMaskify').innerHTML=enmascarar;
  document.getElementById('cuadros').style.display('none');
  if (respuestaIsvalid==true){
     document.getElementById('vista2').style.display('block');  
      }
  else{
  document.getElementById('vista3').style.display('block');  
  }
      
}
