## Apuestas

Partiendo de un documento HTML básico con su estructura correspondiente. Se pide:

1. Crear un programa que funcione como una máquina de apuestas.
2. Comenzaremos el juego con 50 monedas.
3. El programa debe elegir un número entero comprendido entre 1 y 6 (un dado).
4. El programa preguntará al usuario que cantidad de monedas quiere apostar, siendo el mínimo 1.
5. Si el usuario acierta, este ganará el doble de lo apostado. Pero si pierde, se le restará lo apostado a las monedas.
6. Cuando se pierde, el programa lanzará un mensaje de alerta indicando la cantidad perdida y las monedas que le quedan.
7. Cuando las monedas del usuario lleguen a 0, el programa termina y lanzará un mensaje de “Game Over”.
8. Si las monedas llegan a 100, el programa lanzará un mensaje de “¡Enhorabuena! ¡Has ganado el juego!”.
9. Al acabar el programa se deben de imprimir por pantalla todos los números aleatorios que han salido, incluso los 
repetidos.

Se incluye la función para calcular el número aleatorio (min incluido, max excluido):

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}
