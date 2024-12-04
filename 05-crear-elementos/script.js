/*
un elemento de referencia, el que va a contener el nuevo elemento creado
*/

const movies = document.getElementById("movies");

/*
usamos create element

    document.CreateElement(tipoElemento)
    
    el tipo de element pasa como string "" o ``
    se tiene que guardar en una variable o constante
*/

const newMovie = document.createElement("li")


/*
Agregar el elemento DOM desde la referecia usamos el metodo append()

elementoReferencia.append(nuevoElemento)

-es una constante o variable 
*/

movies.append(newMovie)

console.log(newMovie)

/*
agregamos elemento con innerText

elemento.innerText = valor

valor pasa como string
*/

newMovie.innerText = "Sonic 3 🦔";

/*
agregamos las clases al nuevo elemento con el metodo add()

Elemento.classList.add("clase")

El metodo Add acepta más de un parametro separandolo por ""
*/

newMovie.classList.add("list-item","bg-two")

const anotherMovie = document.createElement("li")

movies.append(anotherMovie)

anotherMovie.innerText = "una pelicula de Minecraft ⛏️";

anotherMovie.classList.add("list-item","bg-one")
