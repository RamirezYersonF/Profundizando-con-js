try{
    variable;
    console.log("el try se agrega el valor a evaluar");
}catch(error){
    console.log("se caputa el error en catch");
}finally{   
    console.log("el bloque finally se ejecutara siempre al final de un bloque try catch");
}

try {
    let numero = "hola";
    if (isNaN(numero)) {
        throw new Error("no es numero");
    }
    console.log(`el resultado multiplicado es: ${numero * numero}`);
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}