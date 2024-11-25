/*

seleccionar el elemento a travez de su clase

*/

const titulo = document.querySelector(".titulo");

/*
Mostramos el  modo seleccionado

-nodo expandido- <h1>...</h1>
-nodo abstracto- h1.title

algunos navegadores optimizan la representación de los nodos en la consola (Chrome)

*/

console.log(titulo)

/*

Objeto style

Accedemos a el usando la notación de punto (.)

elemento.style

Resultando es un CSS Style Declartion, Es una lista que reseprenta todas las propiedades de estilo de un elemento.

unicamente muestra el valor de los elementos en línea declarados directamente en el elemento html.

*/

console.log(titulo.style)

/*

Propiedades de estilo

Accedemos a las propiedades usando las anotacion de punto.

elemento.style.nombrePropiedad

A diferencia de CSS, pas propiedades de estilo en JS las escribimos usando el formato camelCase.

    CSS -> Background-Color (Kebab-Case)
    JS  -> BackgroundColor (CamelCase)

*/

console.log("Valores en linea. color: "+ titulo.style.color + " - Fondo: " + titulo.style.backgroundColor)