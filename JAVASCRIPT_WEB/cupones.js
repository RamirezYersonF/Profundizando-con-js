cupones = {
    "uno": 20,
    "dos": 30
}
const descuentos = (nombre) =>{ 
    let valor = 100;
    let precio = valor - cupones[nombre];
    console.log(precio);
}
descuentos("dos");