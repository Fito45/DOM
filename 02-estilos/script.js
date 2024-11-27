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

console.log("Valores en linea. color: " + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor);

/*
Metodo de propiedad:

podemos asignar el valor de la propiedad de estilo en el elemento seleccionado

Elemento.style.nombrePropiedad = "Valor"

es la forma más directa y legible de asignar propiedades.
solo admite asignar propiedades con formato camelCase.

*/

titulo.style.color = "aqua";
titulo.style.backgroundColor = "red";

console.log("Valores Asignados con JS. color: " + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor);

/*
    Metodo SetProperty()
    asignamos una propiedad de estilo al elemento seleccionado.

    elemento.style.setProperty(nombrePropiedad, valor, important)

    -más fexible y poderoso.
    -las propiedades se escriben en formato kebab-case.
    -el formato "important" es opcional.

*/

titulo.style.setProperty("color", "purple",);
titulo.style.setProperty("background-color", "pink", "important");

console.log("Valores Asignados con SetProperty. color: " + titulo.style.color + " - Fondo: " + titulo.style.backgroundColor);

/*
eliminar propiedades

    usamos el metodo de propiedad y le definimos una cadena de texto vacia.

    elemento.style.nombrePropiedad = ""

    esto elimina los valores previamente definidos en javaScript y en los estilos en linea

*/
/*
titulo.style.color = "";
titulo.style.backgroundColor = "";*/

/*

Metodo Remove property()
    Esto elimina propiedad de estilo 
    Elemento.style.removeProperty("nomvrePropiedad")

    Las propiedades siempre estaran en formato kebab-case.

*/
titulo.style.removeProperty("color");
titulo.style.removeProperty("background-color");