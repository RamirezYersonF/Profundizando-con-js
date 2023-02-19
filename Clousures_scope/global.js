var a; // DECLARANDO
var b = "b";
b = "bb";
console.log(b);

// GLOAL SCOPE
var fruta = "banano";
function frutas(params) {
    console.log(fruta);
}
frutas();

// FUCNTION SCOPE
function saludo (){
    let usarname = "ana";
    console.log(usarname);
    if (usarname === "ana") {
        console.log(`hola ${usarname}`);
    }else{
        console.log("No eres ana");
    }
}
saludo();
console.log(usarname);

// BLOCK SCOPE
function fruits() {
    if (true) {
        var fruta = "banano"; // function scope
        let fruta2 = "kiwi"; // blcok scope
        const fruta3 = "manzanan"; // blcok scope
        console.log(fruta2);
        console.log(fruta3);
    }
    console.log(fruta);

}
fruits();
// REASIGNACION REDECLARACION DECLARACION
var usarname; // declarar
console.log(usarname);
usarname = "oscar"; // asignar
console.log(usarname);

var usarname2 = "ramirez" //declarar / asignar
console.log(usarname2);
usarname2 = "rodriguez"; //reasignar
console.log(usarname2);

var secondname = "david"; //declarando / asignando
var secondname = "ana"; // reasignando
console.log(secondname);

// strict Mode
'use strict';
pi = 3.1415;
console.log(pi);
function myFuction(){
    'use strict';
    pi = 3.1415;
}
console.log(myFuction());

//  Closure

const myGlobal = 0;
function myFuction2(){
    const myConst = 1;
    console.log(myGlobal);
        function parent() {
            const inner = 2;
            console.log(myConst, myGlobal);
            function todas() {
                console.log(inner,myConst, myGlobal);
            }
            return todas();
        }
        return parent();
}
myFuction2();

function funcion(firstNum) {
    return function (secondNum) {
      return firstNum + secondNum;
    }
  }
funcion(2)(3);

export function sumWithClosure(firstNum) {
    return function (secNum) {
      return firstNum + (secNum ?? 0);
    }
  }
  
  sumWithClosure(2)(3);

// CLOUSURE JS FUNCIONES ANIDADAS
function saludar(){
    let username4 = "oscar";
    function displayUsername() {
        return 'HOLA' + username4;
    }
   return displayUsername;
}
const g = saludar();
console.log(g);
console.log(g());


function moneyBox(){
    let save = 0;
    function saveMoney(nombre,ahorrarmas){
        save += ahorrarmas
        console.log(`${nombre} Has Ahorrado hasta el momento ${save}`);
    }
    return saveMoney;
}
const money = moneyBox();
money("felipe",2);
money("felipe", 3);
money("felipe",15);

const moneyBoxana = moneyBox();
moneyBoxana("ana",20);
moneyBoxana("ana",300);

// hoisting

const fruits = () => { 
    if (true) { 
        var fruit1 = 'apple'; const fruit2 = 'banana'; let fruit3 = 'kiwi'; 
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();

 nameOfDog("Elmo"); function nameOfDog(name) { console.log(name); }; 