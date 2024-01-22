export function validarCampos(nombre, hora) {
    let contendorALerta = document.getElementById("alert");
    contendorALerta.innerHTML = "";
    if ([nombre, hora].includes("")){
      contendorALerta.style.backgroundColor = "red";
      let mensaje = document.createElement("p");
      mensaje.style.color = "white";
      mensaje.textContent = "Todos los campos son obligatorios";
      contendorALerta.appendChild(mensaje);
      setTimeout(() => {
        mensaje.textContent = " ";
        contendorALerta.style.backgroundColor = "white";
      }, 3000);
      return true;
    } 
    
    else {
      contendorALerta.style.backgroundColor = "blue";
      let mensaje = document.createElement("p");
      mensaje.style.color = "white";
      mensaje.textContent = "tarea añadida con exito";
      contendorALerta.appendChild(mensaje);
      setTimeout(() => {
        mensaje.textContent = " ";
        contendorALerta.style.backgroundColor = "white";
      }, 3000);
      return false;
    }
  }