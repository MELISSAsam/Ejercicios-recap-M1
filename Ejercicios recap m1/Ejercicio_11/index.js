`use strict`
let edad= prompt(`Cuantos anos tiene?`);
edad = parseInt(edad);
if (edad >= 18){
    alert (`Puedes votar`);
} else {
    alert(`No puedes votar aun`);
}