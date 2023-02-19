const estudiantes = [
    {
         "id": 1,
         "nombre": "Jean",
         "apellido": "Jean-Jacques",
         "email": "jean.jacques@example.com"
     },
     {
         "id": 2,
         "nombre": "Yerson Felipe",
         "apellido": "Ramirez Garnica",
         "email": "yerson.felipe@example.com"
     },
     {
         "id": 3,
         "nombre": "Daniel Andres",
         "apellido": "Rodriguez Orjuela",
         "email": "daniel.andraes@example.com"
     },
     {
         "id": 4,
         "nombre": "Michael",
         "apellido": "Michael-Lambert",
         "email": "michael.lambert@example.com"
     }
 ]
console.log(estudiantes[0].nombre);

// FOR EACH // RECORRER UN ARREGLOS
estudiantes.forEach(function(estudiant,index,estudiantes){
     console.log(estudiant);
     console.log(index);
     console.log(estudiantes[0].nombre,estudiantes[0].email);
     console.log(estudiant.nombre);
});

// PUSH
const personas = [];
let usuario = "daniel";
if (usuario == "robot" || usuario == ""){
    personas.push("Hemos detectado que no eres una persona, eres un robot");
    personas.forEach(function(persona){
        console.log(persona);
    });
}else{
    console.log("Bienvenido usuario " + usuario);
}

// METODO MAP

estudiantes.map(function(estudiant){
    console.log(estudiant);
});