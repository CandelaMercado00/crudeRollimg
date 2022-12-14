export const validateName = (valor,campo) =>{
    //que no este vacio
   
   if( valor.trim(). length < 2 ){
    campo.classList="form-control is in-invalid"
    return false;
   }
   campo.classList="form-control is valid"
  return true;
}
export const validateNumber = (valor,campo) =>{
    //que no este vacio
   if( valor.trim(). length < 8 ){
    campo.classList="form-control is-invalid"
    return false;
   }
   const regex = /^\d+$/

   if(regex.test(valor)){
    campo.classList="form-control is-invalid"
    return false;
   }
   campo.classList="form-control is-valid"
    return true;
}
export const validateEmail = (valor, campo) =>{
    //que no este vacio
    if (valor.trim().length < 4) {
        campo.classList="form-control is-invalid"
        return false;
    }
    const regex = /^[w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (regex.test(valor)) {
        campo.classList="form-control is-invalid"
        return false;
    }
    campo.classList="form-control is-valid"
    return true;
}
export const validateURL = (valor, campo) =>{
    //que no este vacio
   if( valor.trim(). length < 1 ){
    campo.classList="form-control is-invalid"
    return false;
   }
   const regex = /[-a-zA-Z0-9@:%_\+.~#?&//=] {2,256}\.[a-z]{2,4]\b{\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/

   if(regex.test(valor)){
    campo.classList="form-control is-invalid"
    return false;
   }
   campo.classList="form-control is-valid"
    return true;
}
