let sumaNumeros=0;
let sumaImpares=0;
let sumaPares=0;
let sumaDigitos=0;
let d=0;

const validator = {
  
  isValid(creditCardNumber){
  //Almacenando el número de tarjeta en un arreglo
  let arrNumTarjeta= Array.from(creditCardNumber);
  //Invirtiendo el número de la tarjeta
  let arrNumInvertido = arrNumTarjeta.reverse();
 
    for(let i=0; i < arrNumInvertido.length; i++)
    {
      arrNumInvertido[i]=parseInt(arrNumInvertido[i]);
      
      if( i % 2 !== 0){
         arrNumInvertido[i] =arrNumInvertido[i]*2;
         
         if(arrNumInvertido[i]>=10){ 
             
            while (arrNumInvertido[i]>0){
              d = arrNumInvertido[i]%10;
              
              sumaDigitos =sumaDigitos+d;
              
              arrNumInvertido[i]=parseInt(arrNumInvertido[i]/10);
              
              }
             arrNumInvertido[i]=sumaDigitos;
             
             sumaDigitos=0;
        }
          else{
          arrNumInvertido[i]=arrNumInvertido[i];
             } 
        sumaImpares = sumaImpares + arrNumInvertido[i];  
    
      }   
       else{   
         sumaPares =sumaPares+ arrNumInvertido[i];
     
         }  
    } 

  sumaNumeros=parseInt(sumaImpares+sumaPares);

  if (sumaNumeros %2== 0){
      return true;
      }

  else{
      return false
      }
  },
  // ------- fin de método de Validación


  // -------Inicio Método de enmascarar Número de tarjeta
  maskify(creditCardNumber){
    //Almacenando el número de tarjeta en un arreglo
    const arrNumTarjeta= Array.from(creditCardNumber);
    
    let newNumero= arrNumTarjeta.fill("#",0,arrNumTarjeta.length-4);
    
    let num= newNumero.join('');
    
    return num;
  }
};

export default validator;
