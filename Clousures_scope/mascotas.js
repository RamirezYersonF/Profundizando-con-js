// function mascotas(){
//     let animal = [];
//     function agregaranimal(agregar){
//         agregar+= animal;
//         if(agregar = ""){
//             for (let index = 0; index < animal.length; index++) {
//                 const element = animal[index];
//                 console.log(element);
//             }
//             return
//         }
//     }
//     return agregaranimal;
// }
// const agregandoanimal = mascotas();
// agregandoanimal("perro");
// agregandoanimal("gato");
function mascotas(){
    const animal = [];
    return function agregaranimal(agregar){
        if (agregar) {
        animal.push(agregar);
     }else if(agregar = ""){
        for (let index = 0; index < agregar.length; index++) {
            console.log(`Estos son los que hay ${agregar[index]}`);
        }
     }
        return agregar;
    };
}
const agregareichon = mascotas()
console.log(agregareichon("perro","gato"));