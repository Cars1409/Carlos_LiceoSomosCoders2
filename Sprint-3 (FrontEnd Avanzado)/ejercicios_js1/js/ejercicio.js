/*Ejercicios Mensajes*/

/*Document.write = el mensaje aparece dentro del documento, es decir en la pantalla de la web"*/
document.write ("Esto es JavaScript");

/*console.log = el mensaje aparece en la consola, esto puede manejar con funciones para ver el resultado*/
console.log ("Esto es un mensaje en la consola");

/*alert = el mensaje aparece como alerta en la parte superior de la pantalla*/
alert ("Esto es una alerta");

/*Ejemplos y a la vez practicando con Arrays*/
var frutas = ["Manzana", "Platano"]
frutas.length
frutas[0] /*Te indica la posicion del texto*/

var nuevaLongitud = frutas.push ("Naranja")
nuevaLongitud

var nuevaLongitud = frutas.push ("Papaya")
nuevaLongitud

var ultimo = frutas.pop() /*Elimina Papaya y lo guarda en la variable ultimo*/
var primero = frutas.shift() /*Elimina Manzana del inicio y lo guarda en la variabble primero*/
var nuevaLongitud = frutas.unshift("Fresa") /*Añade Fresa al inicio del Array*/

/*Ejemplos y a la vez practicando con Objetos*/
var coche = {
marca : "Ford",
modelo : "Mustang",
año : 1970,
revisiones: [
    {
        fecha:"04/06/23",
        taller:"Don Pepe",
    }
]
}





