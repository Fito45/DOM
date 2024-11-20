/*

DOM

organiza los elementos del documento en "nodos" en un arbol jerarquico.

Nodo-> es todo elementos individual de nuestro documento.

Tipos de Nodo

1.Nodo de documento
2.Nodo de elemento
3.Nodo de atributo
4.Nodo de texto
5.Nodo de comentarios

*/

/*

Nodo de Documentos

Este nodo representa el ducmento completo html.
Incluye el contenido desde la "raiz"-Root, hasta los elementos hijos

Para acceder usamos

-> documents

*/

console.log(document);
console.log(document.head);
console.log(document.body);


/*

Nodo Elemento

Para seleccionar nodos de elementos, usamos

getElementByTagName()

Se escribe despues del nodo "document"
*/

/*
let title = document.getElementsByTagName("p");

console.log(title)
*/

/*

Nodos de Atributo

Son los nodos que accedemos a traves de su clase o de su ide

getElementById("nombreId")

getElementByClassName("NombreClase")

querySelector("nombreSelector")-> el primer elemento que encuentre con ese selector

querySelectorAll("nombreSelector")-> Selecinar todos los elementos

*/


/*
let title = document.getElementById("title");

console.log(title);
console.log(title.innerText);
console.log(title.id);

let texts = document.getElementsByClassName("paragraph");

console.log(texts)
console.log(texts[0].textContent);
console.log(texts[1].textContent);
*/

//let title = document.querySelector(("h1"); // Tag
//let title = document.querySelector(("#title"); // Id
let titulo = document.querySelector(".title"); // Class

console.log(titulo)

//let parrafos = document.querySelectorAll("p"); 
let parrafos = document.querySelectorAll(".paragraph");

console.log(parrafos)


/*

Nodo de texto

son los elementos contenido en las etiquetas de html.

.innerText
.textContent


*/

let subtitulo = document.querySelector(".subtitle");
console.log(subtitulo.innerText)

/*

Nodos de comentarios

Tienen un valor de 8 dentro del DOM

*/

let comentario = document.COMMENT_NODE;

console.log(comentario)