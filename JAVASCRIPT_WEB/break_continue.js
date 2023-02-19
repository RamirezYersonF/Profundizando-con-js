const arregloNumros = [1,2,3,4,5,6,7,8,9,10,11,0,5,6];
for (let index = 0; index < arregloNumros.length; index++) {
    console.log(arregloNumros[index]);
    if (arregloNumros[index] === 5)  {
        console.log("Se ha detenido el for");
        break
    }
}
const arregloNumros2 = [1,2,3,4,5,6,7,8,9,10,11,0,5,6];
for (let index = 0; index < arregloNumros2.length; index++) {
    if (arregloNumros2[index] === 5)  {
        // console.log("Se ha detenido el for");
        continue;
    }
    console.log(arregloNumros2[index]);
}

let numero = 10;
for (let index = 1; index <= numero; index+=2) {
    console.log(index);
    
}
