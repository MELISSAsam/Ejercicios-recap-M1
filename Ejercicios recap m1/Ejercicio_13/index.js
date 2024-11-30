`use strict`
let edad = prompt(`Cuantos anos tienes?`);
if(!isNaN(edad)) {
    if (edad>= 18) {
        alert(`Eres mayor de edad.`);

     }else {
        alert(`Eres menor de edad.`);

     }
}else {
    alert(`Por favor, ingrese un numero valido`);
}