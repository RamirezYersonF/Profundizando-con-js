// Parámetros REST

function sumar(a,b,...c){
    let resultado = a + b;  
    c.forEach(function(n){
        resultado += n;   
    });
    return resultado; 
}
console.log(sumar(3,2,5,100,30,20));

// Operador Spread

const array1 =[
    1,2,3,4,5,6,7,8,9,10    
];
const array2 = [10,11,12,13,14,15,16,17,18,19];

const array3 = [array1,array2];
console.log(array3);

const array4 = [...array1,...array2];
console.log(array4);