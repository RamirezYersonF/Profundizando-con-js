// function  imprimirarelemento(elementos){
//    console.log(elementos[0]) 
// }
// imprimirarelemento(["pollo", "pescador"])

function imprimirtodoselementos(array){
   // elementos = ["pollo", "pescador","fesco","carne"];
   for(var i=0; i<array.length; i++){
      console.log(array[i]);
   }
}
imprimirtodoselementos(["pollo", "pescador","fesco","carne"]);

function totalmes(meses){
    for(let i=0; i<meses.length; i++){
        console.log("Este es el mes" + " " + meses[i]);
    } 
}
totalmes(["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto",
"septiembre", "octubre", "novembre", "diciembre"]);