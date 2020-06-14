//import validator from './validator.js';

//document.getElementById('botonEnviar').addEventListener('click',  getInputCardValue);


const alefy = 2;

const viewSelect = document.getElementsByClassName("vista")[0];
const viewStart = document.getElementsByClassName("vista1")[0];
const viewValid = document.getElementsByClassName("vista2")[0];
const viewInvalid = document.getElementsByClassName("vista3")[0];

viewStart.style.display = 'none';
viewValid.style.display = 'none';
viewInvalid.style.display = 'none';

const selectOption1 = document.getElementsByClassName("carOption")[0];
selectOption1.addEventListener("click", startOver);

const selectOption2 = document.getElementsByClassName("carOption")[1];
selectOption2.addEventListener("click", startOver);

const next = document.getElementById("next");
next.addEventListener("click", getInputCardValue);

const back = document.getElementById("back");
back.addEventListener("click", startClean);

const startAgain = document.getElementById("startAgain");
startAgain.addEventListener("click", startOver);

function startOver(){
    viewValid.style.display = 'none';
    viewInvalid.style.display = 'none';
    viewSelect.style.display = 'none';
    viewStart.style.display = 'block';
}

function startClean(){
    viewValid.style.display = 'none';
    viewInvalid.style.display = 'none';
    viewSelect.style.display = 'block';
    viewStart.style.display = 'none';
}


function getInputCardValue(){

  //Ya que tengo el error con el módulo no pude poner el enmascarar en el HTML

  // let creditCardNumber = document.getElementById('cardNumber').value;
  // let respuestaIsvalid= validator.isValid(creditCardNumber);
  // document.getElementById('rtaIsvalid').innerHTML=respuestaIsvalid;

  // let enmascarar=validator.maskify(creditCardNumber);
  // document.getElementById('respuestaMaskify').innerHTML=enmascarar;

  //viewStart.style.display = 'none';
  //viewSelect.style.display = 'none';
  // Para mostrar si es válido puse un 1 de prueba ya que no pude traer el isValid

    viewStart.style.display = 'none';


    if(alefy === 1){
        viewValid.style.display = 'block';
    }
    else{
        viewInvalid.style.display = 'block';
    }
    
}



