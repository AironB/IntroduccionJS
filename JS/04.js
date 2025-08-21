//string o Cadenas de texto
const producto = "Monitor de 20 pulgadas";
//estas dos no son muy comunes
const producto2 = String('Monitor 30 pulgadas');
const producto3 = new String('Monitor 50 pulgadas');
const producto4 = 'Aprendiendo JavaScript con el curso de dearrollo web completo'

console.log(typeof producto)
console.log(typeof producto2)
console.log(typeof producto3)
//la palabra reservada typeof se usa para convertir un
// new String en un objeto y conocer el tipo de variable

//utilizamos la funcion length para saber cuantos caracteres
//tiene la variable
console.log(producto4.length)
//saber si una palabra existe en una cadena de texto
console.log(producto4.indexOf('JavaScript'));
//length sirve para conocer el tamaño de caracteres en la cadena de text
console.log(producto3.indexOf('Tablet'));
//resultado -1 ya que la palabra que buscamos no se encuentra en la cadena de texto

//Includes retorna true or false
console.log(producto4.includes('JavaScript'));
console.log(producto3.includes('Tablet'));