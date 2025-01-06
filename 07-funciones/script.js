/*

Handler- Funciones

Es una funcion que se ejecuta cuando el evento ocurre

hay tres formas de escribir la funcion handler

1.  como una funcion externa
2. como una funcion anonima
3. como una funcion flecha

Funcion externa:

Esta funcion se escribe por fuera del evento y se pasa como argumento al addEventListener

    Function funcionManejadora () {
        // Código a ejecutar
    }

    Elemento.addEventListener
    (tipoEvento , Handler)
*/

//Referencia

const externa = document.getElementById("externa")

const anonima = document.getElementById("anonima")

const flecha = document.getElementById("flecha")

//Funcion Externa

function funcionExterna(){
    console.log("Click en el bonto Externa!")
}

externa.addEventListener(`click`, funcionExterna);

/*

Funcion anonima

esta funcion se escribe dentro del evento y no tiene nombre

    elemento.addEventListener(tipoEvento, function(){}){
    };

*/

//Funcion Anonima

anonima.addEventListener(`click`, function(){
    console.log("Click en el boton Anonima!")
})


/*

Funcion Flecha

Se escribe dentro del evento, no tiene nombre pero es más conscisa.

    Elemento.addEventListener(tipoEvento , () => { // Codigo a ejecutar })

    si el codigo que se ejecuta solo tiene una linea de codigo, se pueden omitir las llaves
    si el codigo que se ejecuta tiene más de una linea de codigo, se debe escribir entre las llaves

*/

//funcion flecha

flecha.addEventListener(`click`, () => {
    console.log("Click en el boton Flecha")
})