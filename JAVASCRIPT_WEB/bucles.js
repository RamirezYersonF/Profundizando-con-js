let contador2 = 20;
while (contador2 < 10){
    console.log(contador2);
    contador2 = contador2 +1;
}
let variable = 20;
do{
    console.log(variable);
    variable = variable + 1;
}
while (variable < 10);

for (let index = 0; index < 10; index++) {
    console.log(index);
    
}
numeros =[10,20,30,40,50,60,70,80,90,100,101]
for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
}
const usuario={
    nombre: "felipe",
    apellido: "ramirez",
}
for (const key in usuario) {
    console.log("El objeto es: " + key + " y el valor es: " +usuario[key]);
}
numeros =[10,20,30,40,50,60,70,80,90,100,101]
for (const iterator of numeros) {
    console.log(iterator);
}

const saludito = "hola";
for (const iterator of saludito) {
    console.log(iterator);
}