export function validarCampos(nombre, hora) {
    let contendorALerta = document.getElementById("alert");
    contendorALerta.innerHTML = "";
    if ([nombre, hora].includes("")){
      contendorALerta.style.backgroundColor = "#dc3545";
      let mensaje = document.createElement("p");
      mensaje.style.color = "white";
      mensaje.textContent = "Upss! debes llenar los campos de la tarea";
      contendorALerta.appendChild(mensaje);
      setTimeout(() => {
        mensaje.textContent = " ";
        contendorALerta.style.backgroundColor = "#222222";
      }, 3000);
      return true;
    } 
    
    else {
      contendorALerta.style.backgroundColor = "#198754";
      let mensaje = document.createElement("p");
      mensaje.style.color = "white";
      mensaje.textContent = "Añadiste una tarea con exito";
      contendorALerta.appendChild(mensaje);
      setTimeout(() => {
        mensaje.textContent = " ";
        contendorALerta.style.backgroundColor = "#222222";
        
      }, 3000);
      return false;
    }
  }