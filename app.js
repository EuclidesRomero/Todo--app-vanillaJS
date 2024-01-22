import { generarId } from './generarId.js'
import {botonEliminarStyle, horaContenedorStyle,nuevoElementoStyle } from './moduloStyle.js'
import {validarCampos} from './validarCampos.js'


const tareas = [];
const botonEnviar = document.getElementById('botton-enviar')
botonEnviar.addEventListener("click", function () {
 let textoUsuario = document.getElementById("textUser").value;
 let horaTarea = document.getElementById("hora-tarea").value;
  if (!validarCampos(textoUsuario, horaTarea)) {
    tareas.push({ name: textoUsuario, hora: horaTarea, id: generarId()});
    setTimeout(() => {
      document.getElementById("textUser").value = " ";
    }, 3000);
    mostrarTareas();
  }
   return
  
});
console.log(tareas)

/* sirve para validar que los campos no estén vacios */


/* esta funcion sirve para mostrar las tareas que se encuentran en el arrray */
function mostrarTareas(){
    const contenedorTareas = document.getElementById("mostrar-tarea")
    contenedorTareas.style.marginLeft = '5px';
    contenedorTareas.style.marginRight = '5px';
    contenedorTareas.innerHTML = '';

    tareas.map(tarea => {
   let nuevoElemento = document.createElement('div')
   let horaContenedor = document.createElement('div')
   let botonEliminar = document.createElement('button')
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