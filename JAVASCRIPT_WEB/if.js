let edad = 36;
if(edad){
    if(edad >= 0 && edad <= 18){
        console.log("eres un joven");
    }else if(edad >= 19 && edad <= 30){
        console.log("eres un adulto");
    }else if(edad >= 31 && edad <=50){
        console.log("eres un adulto mayor");
    }else if(edad >= 51 && edad <=80){
        console.log("eres una persona de la 3 edad");
    }else{
        console.log("esa edad no existe");
    }
}