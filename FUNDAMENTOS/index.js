let pregunta = prompt('Cuanto es 2+2?: ');
while (pregunta != 4) {
    let rectificarpregunta = prompt('Error,Cuanto es 2+2?: ');
    if (rectificarpregunta == 4) {   
        break;
    }
}
alert('Felicidades :)')