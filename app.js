import { generarId } from './generarId.js'
import {botonEliminarStyle, horaContenedorStyle,nuevoElementoStyle } from './moduloStyle.js'
import {validarCampos} from './validarCampos.js'

let tareas = [];

const botonEnviar = document.getElementById('botton-enviar')
function verificarEstado(){
  let estado = document.getElementById('estado-tarea')
    tareas.length> 0 ? estado.textContent = 'Estas son tus tareas pendientes': estado.textContent= 'No tienes tareas pendientes'; 
}

botonEnviar.addEventListener("click", function () {
  let textoUsuario = document.getElementById("textUser").value;
  let horaTarea = document.getElementById("hora-tarea").value;
  if (!validarCampos(textoUsuario, horaTarea)) {
    tareas.push({ name: textoUsuario, hora: horaTarea, id: generarId()});
    mostrarTareas(); 
  }
  
  mostrarTareas()
  verificarEstado()
  return
  
});

/* esta funcion sirve para mostrar las tareas que se encuentran en el arrray */
function mostrarTareas(){
  let contenedorTareas = document.getElementById("mostrar-tarea")
  contenedorTareas.style.marginLeft = '5px';
  contenedorTareas.style.marginRight = '5px';
  contenedorTareas.style.marginLeft='20px';
  contenedorTareas.innerHTML = '';
  
  tareas.map(tarea => {
    let nuevoElemento = document.createElement('div')
    let horaContenedor = document.createElement('div')
    let botonEliminar = document.createElement('button');
    botonEliminar.innerText = 'Eliminar';
    botonEliminar.setAttribute('data-tarea-id', tarea.id)


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

    botonEliminar.addEventListener('click', function() {
      const tareaId = this.getAttribute('data-tarea-id');
      Eliminar(tareaId)
      verificarEstado();
    });

    function Eliminar (id){
      tareas = tareas.filter(function(elemento){
        return elemento.id != id;
      })
      verificarEstado();;
      mostrarTareas();
    }
});};

