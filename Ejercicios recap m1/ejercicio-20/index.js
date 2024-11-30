`use strict`
let calcularIVA = (precio) => {
    let iva = precio * 0.12; 
    let precioTotal = precio + iva; 
    return precioTotal;
};
let precio = parseFloat(prompt("Ingresa el precio del producto:"));
if (isNaN(precio) || precio < 0) {
    alert("Por favor, ingresa un precio válido.");
} else {
    const total = calcularIVA(precio);
    alert(`El precio total con IVA incluido es: $${total.toFixed(2)}`);
}