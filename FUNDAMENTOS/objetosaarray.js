// const objetos = {"nombre":"felipe","edad":22}
function impirmirobjetos(objetos) {
    const array = Object.values(objetos);
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    
    }
}
impirmirobjetos({"nombre":"felipe","edad":22});

persona = {
    nombre: "Felipe",
    edad: 22
}
persona2 ={
    nombre: "Yerson Felipe",
    edad: 25

}

let  arrayobjetos = [persona, persona2];
console.log(arrayobjetos);
console.log("Hola mi nombre es " + arrayobjetos[0].nombre, "y mi edad es " +  arrayobjetos[0].edad);