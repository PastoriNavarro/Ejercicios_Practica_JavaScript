function notaMedia() {

let nota1 = Number(prompt("introduce la primera nota"));
let nota2 = Number(prompt("introduce la segunda nota"));
let nota3 = Number(prompt("introduce la tercera nota"));
let nota4 = Number(prompt("introduce la cuarta nota"));
let nota5 = Number(prompt("introduce la quinta nota"));
let nota6 = Number(prompt("introduce la sexta nota"));

let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6;

document.getElementById('media').innerHTML = `<p>Tu nota media es : ${media} </p>`
}
