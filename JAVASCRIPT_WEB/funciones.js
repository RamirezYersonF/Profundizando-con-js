// Funciones declaradas
function nombres(){
    console.warn("nombres");
}
nombres();

function returnf(){
    console.warn("returnf");
    // return 19;
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    return "se acabo";
}
let variableFuction = returnf();
console.warn(variableFuction);

function saludar(nombre,edad){
    console.log(`Hola mi nombre: ${nombre} y mi edad es ${edad}`);
}
saludar("yerson",22);
// Funciones expresadas // anonima
functionExpresada();
const functionExpresada =() =>{
    console.log("Expresada");
}
functionExpresada();