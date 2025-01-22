/*
estos metodos nos permietes movermos entre los metodos relacinados con el DOM
*/

const padre = document.getElementById('parent');

const hijo = document.getElementById('child');

const hermano = document.getElementById('sibling');

//parenNode devuelve el modo oadre del elemento

console.log(hijo.parentNode);

//childNode es una conexion de todos los nodos hijos incluyendo elementos de html incluyendo texto comentarios.

console.log(padre.childNodes);

//children lo que devuelve es una colección de html de los nodos hijos que son elementos de html

console.log(padre.children);

//first child devuelve el primer nodo hijo puede ser un nodo de texto comentario o elemento

console.log(padre.firstChild);

//FirstElementChild devuelve el primero nodo hijo que es un elemento

console.log (padre.firstElementChild);

//lastchild delvuelve el ultimo nodo hijo

console.log(padre.lastChild);

//LastElementChild devuelde el ultimo nodo hijo que es un elemento

console.log(padre.lastElementChild);

//Nextsibiling devuelve el siguiente nodo hermando

console.log(hijo.nextSibling);
console.log(hermano.nextSibling);

//nextElementsibiling devuelde el siente nodo hermano que sea un elemento

console.log(hijo.nextElementSibling);
console.log(hermano.nextElementSibling);

//previousSibiling devuelve el anterior nodo hermano puede ser un nodo de texto cometario o elemento


console.log(hijo.previousSibling);
console.log(hermano.previousSibling);

//PreviousElementSibiling devuelde el nodo anterior que sea un elemento 

console.log(hijo.previousElementSibling);
console.log(hermano.previousElementSibling);


