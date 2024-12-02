/*
seleccionar elementos por id
*/

const titulo = document.getElementById("title");
const lista = document.getElementById("list");

console.log(titulo);
console.log(lista);

/*
innertText 

Devuelve un "string" del contenido visible dentro de un elemento.

    Elemento.innerText

    excluye los elementos ocultos
    excluye los espacios en el documento
    excluye las etiquetas html
*/

console.log(">>> con innerText");
console.log(titulo.innerText);
console.log(lista.innerText);

/*
    TextContent

    Devuelve un "string" del contenido visible dentro de un elemento

    Elemento.textContent

    incluye los espacios
    se muestra el objeto oculto
    excluye las etiquetas html
*/

console.log(">>> con textContent");
console.log(titulo.textContent);
console.log(lista.textContent);

/*

    InnerHTML

    Devuelve un "string" con la estructura interna de el elemento seleccionado

        elemento.innerHTML

        asignamos el valor al elemento incluyendo las etiquetas
        
        elemento.innerHTML = "<tag>...</tag>"

*/

console.log(">>> con innerHTML");
console.log(titulo.innerHTML);
console.log(lista.innerHTML);

/* 
    Modificar el contenido con innerText

    asignamos el valor al elemento seleccionado
    
    elemento.innerText = "string"

*/

titulo.innerText = "Pollomones"
lista.innerText = "Caldo asado!"

// InnerHTML extra!!

titulo.innerHTML = "Quiero los <span>Pollomones!!</span>";
lista.innerHTML = `<li>Kiwi</li><li>Cuak</li>`;


/*

getAttribute()

Devuelve el valor del elemento que indiquemos

Elemento.getAttribute(atributo)


*/

const enlace = document.getElementsByTagName("a");

console.log(enlace[0].getAttribute("href"))

/*

removeAttribute()

Elimina el valor del atributo de un elemento.

    elemento.removeAttribute(atributo)

*/

enlace [0].removeAttribute("href");
console.log(enlace[0].getAttribute("href"))

/*

setAttribute()

Asigna un atributo y un valor a un elemento.

    elemento.setAttribute(atributo,elemento)

esto nos va a permitir sobreescribir un atributo ya declarado o crear un huevo atributo
*/

enlace[0].setAttribute("href","https//www.Pollomones.com");

console.log(enlace[0].getAttribute("href"))

enlace[0].setAttribute("target","_blank");

console.log(enlace[0].getAttribute("target"))