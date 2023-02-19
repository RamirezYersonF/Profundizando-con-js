function conseguirtiposuscripcion(suscripcion) {
    if (suscripcion == "free"){
        console.log("Tipo de suscripcion es gratis");
        return;
    }
    if (suscripcion == "medium"){
        console.log("Tipo de suscripcion es medium");
        return;
    }
    if (suscripcion == "small"){   
        console.log("Tipo de suscripcion es small");
        return;
    }
    console.warn("Tipo de suscripcion no existe");
}
// OBJETOS
function conseguirsuscripcion(subcrition){
    const sub =
         {
            free: "Tipo de suscripcion es gratis",
            medium: "Tipo de suscripcion es medium",             
            vip: "Tipo de suscripcion es small"
         }
    if (sub[subcrition]){
        //  console.log(sub.free);
        console.log(sub[subcrition]);
        return;
    }
    console.warn("Tipo de suscripcion no existe");
}
conseguirsuscripcion("free");
