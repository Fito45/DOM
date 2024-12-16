/*
Evento 

un evento es una accion o suceso que ocurre en el navegador o en un elemento del dom
puede ser iniciado por el usuario o por el sistema, 

Puede ser *manejado* mediante de JS

-Manejar eventos : escribir codigo que reaccione de cierta manera cuando algo espefico suceda 

necesitamos usar objetos claves

1-target (blanco)

El ementos target es el elemento del DOM en el que ocurrio el evento. Este elemento se encuentra dentro del
objeto evetos (event). y se accede mediante la propiedad event.target

2-event Listener (escuchador)

El event Listener es el oido que espera o que esta atento a que aocurra un evento en un elemento especifico
usamos el metodo addEventListener para escuchar eventos.

3-Trigger (Disparador)

Es simplemente el desencadetante que provoca que un evento ocurra. es la acción que realiza el usuario o el sistema
para activar el evento.

    hacer click
    mover el raton
    escribir en un input

4-event Handler (manejador) esto es una funciona que se ejecuta cada vez que ocurre el evento.
con codigo JS le decirmos que hace el event handler

    mostrar un mensaje
    cambiar de color 
    lanzar una alerta

Sintaxis
    target.eventListener(trigger , eventHandler )

    target: elemento donde ocurre el evento
    listener: escucha y detecta el evento
    Trigger: accion que ocurre en el evento
    handler: funcion que se ejecuta al ocurrir el evento 
*/

/*
seleccionar el elemento
*/

const button = document.getElementById("button");

//manejar el evento

button.addEventListener("click", mostrarMensaje );

//definir funcion que ejecuta el eventHandler

function mostrarMensaje() {
    console.log("Pollo");
}

