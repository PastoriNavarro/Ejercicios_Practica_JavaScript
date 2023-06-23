function valorNotas(){

let nota = Number(prompt("Introduce tu nota con dos decimales"));



if(nota >= 0 &&  nota <= 2.99){
    document.getElementById('valor').innerHTML = `<p>El alumno ha sacado un ${nota} que corresponde a un Muy Deficiente </p>`

}else if(nota >= 3 && nota <= 4.99){
    document.getElementById('valor').innerHTML = `<p>El alumno ha sacado un ${nota} que corresponde a un Insuficiente </p>`

}else if(nota >= 5 && nota <= 5.99){
    document.getElementById('valor').innerHTML = `<p>El alumno ha sacado un ${nota} que corresponde a un Suficiente </p>`

}else if(nota >= 6 && nota <= 6.99){
    document.getElementById('valor').innerHTML = `<p>El alumno ha sacado un ${nota} que corresponde a un Bien </p>`

}else if(nota >= 7 && nota <= 8.99){
    document.getElementById('valor').innerHTML = `<p>El alumno ha sacado un ${nota} que corresponde a un Muy Notable </p>`

}else if(nota >= 9 && nota <= 10){
    document.getElementById('valor').innerHTML = `<p>El alumno ha sacado un ${nota} que corresponde a un Sobresaliente </p>`

}else{
    alert("Esta nota no es valida");
}
  
}
