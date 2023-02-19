let nombre = "Yerson";
let apellido = "Ramirez";

const usuario = {
    nombre: nombre,
    apellido:apellido,
    edad : function (validaredad){
        console.log("la edad es: " + validaredad);
    }
}
console.log(usuario);    
usuario.edad(15);