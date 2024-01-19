const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha =  Date.now().toString(36);
    return random + fecha;
};

const tareas = [];

botonEnviar = document.getElementById('botton-enviar')
botonEnviar.addEventListener("click", function () {
textoUsuario = document.getElementById('textUser').value;
tareas.push({name:textoUsuario, id: generarId()})
console.log(tareas)
setTimeout(()=>{
    document.getElementById('textUser').value = "";
}, 3000)
mostrarTareas();
})

function nuevoElementoStyle (elemento){
    elemento.style.width = '80%';
    elemento.style.height= '20px';
    elemento.style.backgroundColor  = 'red'
    elemento.style.marginBotton = '10px'
}


function mostrarTareas(){
    const contenedorTareas = document.getElementById("container-tareas")
    contenedorTareas.innerHTML = '';
    tareas.map(tarea => {
    nuevoElemento = document.createElement('div')
    hora = document.createElement('input')
    hora.type = 'time';
    hora.style.width = '50px';
    hora.style.height = '20px';
    hora.style.marginRight = '10px';
    //damos estilo al elemento creado utilizando la funcion creada arriba logrando modularizar el codigo
    nuevoElementoStyle(nuevoElemento)
    nuevoElemento.textContent = tarea.name
    contenedorTareas.appendChild(nuevoElemento);
    contenedorTareas.appendChild(hora)
    
})};