
//Cambiar el CSS utilizando doom


 const encabezado = document.querySelector('h1');
 console.log(encabezado.style)
 encabezado.style


// encabezado.style.backgroundColor = 'red';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = 'upperCase';


const card = document.querySelector('.card');

card.classList.add('nueva-clase', 'segunda clase');

card.classList.remove('card');

console.log(card.classList);



