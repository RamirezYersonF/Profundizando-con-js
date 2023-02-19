const hUno  = document.querySelector('h1');
const parrafoUno = document.querySelector('.parrafo1');
const parrafoDos = document.querySelector('.parrafo2');
const parrafoId = document.querySelector('#parrafoid');
const input = document.querySelector('input');
console.log(input.value);
//  console.log({
//      hUno,
//      parrafoUno,
//      parrafoDos,
//      parrafoId,
//      input });

hUno.innerHTML = "Bienvenidos <br> Hola";
input.setAttribute('placeholder',"Escribe aqui es una orden " );

const img = document.createElement('img');
const contenedor = document.getElementsByClassName('contenedor__imagen');
img.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png');
contenedor.append(img);