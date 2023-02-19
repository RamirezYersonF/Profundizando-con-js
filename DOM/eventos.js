const inputRecibirDato = document.querySelector('#calculoUno');
const inputRecibirDato2 = document.querySelector('#calculoDos');
const button = document.querySelector('button');
const resultadoH3 = document.querySelector('h3');


button.addEventListener('click', calculate);

function calculate(){
      let  sumainputs = (parseInt(inputRecibirDato.value) + parseInt(inputRecibirDato2.value))
       resultadoH3.innerHTML = sumainputs;
    
}