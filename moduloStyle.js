export function nuevoElementoStyle (elemento){
    elemento.style.width = '60%';
    elemento.style.height= '20px';
    elemento.style.fontSize = '20px';
    elemento.style.marginBottom = '10px';
    elemento.style.fontSize = '20px';
}

export function horaContenedorStyle(elemento) {
 elemento.style.marginRight= '20px'
 elemento.style.width = '10%';
 elemento.style.height = '20px';
 elemento.style.marginTop = '0px';
 elemento.style.fontSize = '20px';
 elemento.style.borderRadius= '20px';
}

export function botonEliminarStyle(boton){
boton.style.width = '10%';
boton.style.color = 'white';
boton.style.backgroundColor = '#f55c5c'
boton.style.borderRadius= '20px'
boton.style.width = '12%';
boton.style.height = '20px';
boton.style.marginTop = '3px';
boton.style.marginRight = '40px';


boton.addEventListener('mouseenter', function() {
  boton.style.cursor = 'pointer';
});

boton.addEventListener('mouseleave', function() {
  boton.style.cursor = 'auto';
});
}