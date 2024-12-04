/*
Accedemos al primer elemento de la lista
*/

const Botanas = document.getElementsByTagName(`li`);

/*
propiedad classList

accdedemos a la lista de clases que tiene un elemento

    elemento.classList

    -devuelve un DOM Token list (listado de clases en el DOM) en tipo array.
*/

console.log(Botanas[0].classList);
console.log(Botanas[0].classList[0]); //acceso a clases a travez de su indice

/* 
Agregar clases

para agregar clases usamos el metodo add.

    elemento.classList.add(clase)

    nombre de la clase pasa como string entre "" o `` 

*/

Botanas[1].classList.add("bg-lightpink")

/*
verificar si existe una clase en espeficia en el documento, usamos el metodo containt

    elemento.classList.contains(clase)

    devuelve true si existe la clase o false si no existe
    la clase pasa como string entre "" o `` 
*/

console.log(Botanas[2].classList.contains("botana"))
console.log(Botanas[2].classList.contains("bg-lightblue"));

/*
para eliminar una clase usamos el método remove

    elemento.classList.remove()

    La clase pasa como un string
*/

Botanas[3].classList.remove("bg-lightpink")
Botanas[3].classList.remove("botana")