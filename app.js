const tareas = [];
//sirve para generar un id unico para cuando vaya a hacer un delete, sea por el id que se encuentra en el array de objetos
const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha =  Date.now().toString(36);
    return random + fecha;
};

//Esta funcion sirve para cuando el usuario haga click en el boton se valide que no hayan campos vacíos
botonEnviar = document.getElementById('botton-enviar')
botonEnviar.addEventListener("click", function () {
  textoUsuario = document.getElementById("textUser").value;
  horaTarea = document.getElementById("hora-tarea").value;
  if (!validarCampos(textoUsuario, horaTarea)) {
    tareas.push({ name: textoUsuario, hora: horaTarea, id: generarId() });
    setTimeout(() => {
      document.getElementById("textUser").value = "";
    }, 3000);
    mostrarTareas();
  }
   return
  
});

/* Estas funciones sirven para darle estilo a la interfaz */
function nuevoElementoStyle (elemento){
    elemento.style.width = '60%';
    elemento.style.height= '20px';
/*     elemento.style.backgroundColor  = 'red'; */
    elemento.style.marginBottom = '10px';
}

function horaContenedorStyle(elemento) {
 elemento.style.marginRight= '20px'
 elemento.style.width = '10%';
 elemento.style.height = '20px';
 elemento.style.marginTop = '0px';
/*  elemento.style.backgroundColor = 'blue' */
}

function botonEliminarStyle(boton){
boton.style.width = '10%';
/* boton.style.backgroundColor = 'yellow'; */
boton.style.height = '20px';
boton.style.marginRight = '10px';
}

/* ------------------------------------------------------------------------------------------------------ */


/* sirve para validar que los campos no estén vacios */
function validarCampos(nombre, hora) {
contendorALerta = document.getElementById('alert')
contendorALerta.innerHTML = '';
if([nombre, hora].includes('')){
contendorALerta.style.backgroundColor = 'red'
mensaje = document.createElement('p')
mensaje.style.color='white';
mensaje.textContent = 'Todos los campos son obligatorios'
contendorALerta.appendChild(mensaje)
setTimeout(()=>{
   mensaje.textContent = ' '
   contendorALerta.style.backgroundColor = 'white'
},1000)
return true;
} 

else {
contendorALerta = document.getElementById('alert')
contendorALerta.style.backgroundColor = 'blue'
mensaje = document.createElement('p')
mensaje.style.color='white';
mensaje.textContent = 'tarea añadida con exito'
contendorALerta.appendChild(mensaje)
setTimeout(()=>{
    mensaje.textContent = ' '
    contendorALerta.style.backgroundColor = 'white'
},1000)
return false;
}
}

/* esta funcion sirve para mostrar las tareas que se encuentran en el arrray */
function mostrarTareas(){
    const contenedorTareas = document.getElementById("mostrar-tarea")
    contenedorTareas.style.marginLeft = '5px';
    contenedorTareas.style.marginRight = '5px';
    contenedorTareas.innerHTML = '';

    tareas.map(tarea => {
    nuevoElemento = document.createElement('div')
    horaContenedor = document.createElement('div')
    botonEliminar = document.createElement('button')
    //Dando estilos a los elementos
    botonEliminarStyle(botonEliminar)
    horaContenedorStyle(horaContenedor)
    nuevoElementoStyle(nuevoElemento)
    //damos estilo al elemento creado utilizando la funcion creada arriba logrando modularizar el codigo
    nuevoElemento.textContent = tarea.name
    contenedorTareas.appendChild(nuevoElemento);
    horaContenedor.textContent = tarea.hora;
    contenedorTareas.appendChild(horaContenedor)    
    contenedorTareas.appendChild(botonEliminar)
})};