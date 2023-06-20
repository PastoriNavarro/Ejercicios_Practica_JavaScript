let palabra = [];
let entrada = prompt("Introduce una letra");

while(entrada != null){
    palabra.push(entrada);

    if(/\d/.test(entrada)){
        entrada = prompt("El caracter introducido no es válido. Introduzca una letra")
        palabra.pop(entrada);

    }else if(entrada != null){
        entrada = prompt("Introduce otra letra")
   }
}

alert(palabra.join(' '));

