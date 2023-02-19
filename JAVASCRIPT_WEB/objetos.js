const usuario ={
    nombre: "Felipe",
    apellido: "ramirez",
    edad: 22,
    pasatiempos:[
        "correr",
        "jugar",
        "caminar"
    ],
    estado: false,
    contacto: {
        email: "felipe@gmail.com",
        twitter: "felipe",
        celular: 111111
    },
    saludar: function(){console.log("Holaaaaaaaaaaa")},
    nombres: function(){console.log(`Hola mi nombre es ${this.nombre} y mi correo es ${this.contacto.email}`)}
}
// console.log(usuario);
console.log(usuario["nombre"]);
console.log(usuario.apellido);
console.log(usuario.pasatiempos[0]);
console.log(usuario.contacto.email);
usuario.saludar();
usuario.nombres();
console.log(usuario.hasOwnProperty("nombre"));
console.log(usuario.hasOwnProperty("nombresssssssssss"));