const saludo = function(){
    console.log('Hola');
}
saludo();

const nombress = (usuario) => console.log(`Bienvenido  ${usuario}`);
nombress("felipe");

const nombres = usuario => console.log(`Bienvenido  ${usuario}`);
nombres("felipe");

const sumar = (a,b,c) =>  a + b + c; console.log(sumar(2,2,2));

const funcionvariaslineas = () =>{
    console.log('hola');
    console.log('tardes');
    console.log('hellow');
}
funcionvariaslineas();


const numeros = [1,2,3,4];
numeros.forEach(function(n,index){
    console.log(`El elemento ${n} y esta en la posicion de ${index}`);
});

function perro(){
    console.log(this);
}
perro();

const gato = {
    nombre: "felpe",
    ladrar: function(){
        console.log(this)
    }
}
gato.ladrar();

const raton ={
    nombre: "felpe",
    ladrar:() =>{
        console.log(this)
    }
}
raton.ladrar();
