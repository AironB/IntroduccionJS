const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

//forma anterior
// const precioProducto = producto.precio;

// console.log(precioProducto);

//Destructoring

const {precio, nombreProducto} = producto;
console.log(precio, nombreProducto);