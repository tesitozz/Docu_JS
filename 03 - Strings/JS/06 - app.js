const producto = 'Monitor 20 Pulgadas';

//.repeat te va a permitir repetir una cadena de texto

const texto = "En Promocion".repeat(3);

console.log(texto)

//Aparte
console.log(`${producto} ${texto}!!`)

//Split , dividir un string

const actividad = "Estoy aprendiendo JS";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir';

console.log(hobbies.split(","))

const twet = "Aprendiendo #Lola";

console.log(twet.split("#"))