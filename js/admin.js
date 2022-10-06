
import {
    validateEmail, validateName, validateNumber, validateURL,
} from "./validators"
import { Contacto } from "./contacto.js";

//const nombre = "Eze";
//const telefono = "318150 6731";
//const email = "eze@gmail.com";
//const URL = "https://regexr.com/2rj36"; 

//if (
// validateEmail(nombre) && validateName(Nombre) &&
 //validateNumber(Numero) && validateURL(URL) ) 
 //  {
//    const eze = new Contacto (nombre, telefono, email,URL,"");
//console.log(Eze)
//} else {
 //   console.log ("Algun contacto no es valido")
//}

const formularioContacto = document.getElementById(formContacto)

const campoNombre = document.getElementById("nombreContacto")
const campoTelefono = document.getElementById("TelefonoContacto")
const campoEmail = document.getElementById("emailContacto")
const campoImagen = document.getElementById("URL")
const campoNotas = document.getElementById("notasContacto")

let nombre = "";
let telefono= "";
let email= "";
let imagen ="";
let notas ="";
let URL ="";


campoNombre.addEventListener("blur", (e)=>{//agrega eventos a los elementos de nuestro html
    if(validateName(e.target.value, campoNombre)){
      nombre = e.target.value;
      campoNombre.classList="form-control is valid"
    }else{
        campoNombre.classList = "form-control is-invalid"
    }
})   

campoTelefono.addEventListener("blur", (e)=>{//agrega eventos a los elementos de nuestro html
    if(validateNumber(e.target.value, campoTelefono)){
      telefono = e.target.value;
    }
})  
campoEmail.addEventListener("blur", (e)=>{//agrega eventos a los elementos de nuestro html
    if(validateEmail(e.target.value, campoEmail)){
      email = e.target.value;
      
    }
})  
campoImagen.addEventListener("blur", (e)=>{//agrega eventos a los elementos de nuestro html
    if(validateName(e.target.value, campoImagen)){
      URL = e.target.value;
     
    }
})  
campoNotas.addEventListener("blur", (e)=>{
      notas = e.target.value;
})  


const crearUsuario =(contacto) => { //agreamos datos a la tabla
    const tbody = document.getElementById ("tbody__Admin")
    const tr = document.createElement ("tr");
    

    const td1 = document.createElement ("td");
    
    td.innerText = contacto.codigo;

    tr1.appendChild (td); 
    const td2 = document.createElement ("td");
    
    td.innerText = contacto.nombre;

    tr2.appendChild (td); 

    const td3 = document.createElement ("td");
    
    td3.innerText = contacto.telefono;

    tr.appendChild (td); 

    const td4 = document.createElement ("td");
    
    td4.innerText = contacto.email;

    tr.appendChild (td); 

    const td5 = document.createElement ("td");
    
    td5.innerText = contacto.imagen;

    tr.appendChild (td); 

    const td6 = document.createElement ("td");
    
    td6.innerText = contacto.notas;

    tr.appendChild (td); 

    tbody.appendChild(tr);

}


formularioContacto.addEventListener("Submit", (e =>{
    e.preventDefault(); //evita recargar la pagina

    if (
  validateEmail(nombre, campoEmail) && validateName(Nombre, campoNombre) &&
   validateNumber(telefono, campoTelefono) && validateURL(imagen, campoImagen) ) 
   {
    const usuario = new Contacto (nombre, telefono, email,URL,notas);
//console.log(usuario)
    crearUsuario (contacto)
} else {
    console.log ("Algun contacto no es valido")
}
}))
