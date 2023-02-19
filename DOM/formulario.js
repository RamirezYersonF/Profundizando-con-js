const form = document.querySelector('#form');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const button = document.querySelector('button');
const resultado = document.querySelector('h3');
// button.addEventListener('click',suma);
form.addEventListener('submit',suma);
function suma(event){
    event.preventDefault();
    let resultados = (parseInt(input1.value) + parseInt(input2.value));
    resultado.innerHTML = resultados;
}