/*

Objeto event

El objeto event regpresenta un suceso que ocurre en el navegador
como un click, pulsar una tecla o el movimiento del mouse y proporciona
informacion sobre las propiedades y metodos para manejarlo.

Para acceder al objeto event(e) se pasa automaticamente como un 
argumento a la función manejadora.

Ejemplo / Sintaxis

Function funcionManejadora(event) {
    //CodigoEjecutable...
    Console.log(event)// muestra la lista de propiedades y metodos
}

*/

const button = document.getElementsByClassName("button");

button[0].addEventListener(`click`, mostrarObjetoEvento);

function mostrarObjetoEvento(event) {
    console.log(event);
}

/*
Propiedades del objeto event:

-type: devuelve el tipo de evento.
-target: devuelve el elemento donde ocurre el evento
-timestamp: devuelde la marca de tiempo desde la carga de la pagina.
-Code: devuelve el codigo de la tecla presionada
-Key: devuelve el valor de la tecla presionada
-clientX: devuelve la posicion horizontal del mouse a la relacion de la posicion a la ventana del navegador
-ClientY: devuelve la poscion vertical del puntero del mouse en realcion con las ventanas del navegador


*/

document.addEventListener(`keydown`, function (e) {
    console.log(e);
    console.log(e.type);
    console.log(e.code);
})

document.addEventListener(`mousemove`, (e) => {
    //console.log(e);
    console.log(e.clientX + "" + e.clientY);
});