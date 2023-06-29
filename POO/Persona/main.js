class Persona{
    nombre;
    apellido;
    edad;

    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    }

    const miPers = new Persona();
    let cont = 0;
    const arrayPersona = [];

    function persona(){

        while(cont < 5){

        miPers.nombre = prompt("Introduce tu nombre");
        arrayPersona.push(miPers.nombre);
   
        miPers.apellido = prompt("Introduce tus apellidos");
        arrayPersona.push(miPers.apellido);
    
        miPers.edad = prompt("Introduce tu edad");
        arrayPersona.push(miPers.edad);
    
        cont++;

    }
}

    function mostrar(){
        document.getElementById("persona").innerHTML = 
        `<h1>Personas: </h1><br> ` + arrayPersona.join("<br>");
        
        }

        
    
