const array = [
    "rojo",
    "verde",
    [
        "amarrillo",
        "azul"
    ]
];
console.log(array[2].length);

const c = Array.of("x", "y", "z");
console.log(c[2])

const d = Array(100).fill(false);;
console.log(d);

const e = new Array();
console.log(e);

const h =["rojo", "verde", "amarrillo", "azul"]
console.log(h);
h.push("Negron");
console.log(h);
console.log(h.length);
h.pop();
console.log(h);

h.forEach(funcion = (e,index) =>{
    console.log(`<li id="${index}">${e}</li>`);
})