const arreglos = [1,2,3,4,5,6,7,8,9,10];
console.log(arreglos);
const [one,two,three,four,five,six,seven,eight,nine,ten] = arreglos;
console.log(one * ten);

let persona = {
    nombre: "felipe",
    apellido : "ramirez"
}
let {nombre,apellido} = persona;
console.log(nombre,apellido);