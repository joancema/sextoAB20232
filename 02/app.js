const ejemplo ={ id: 1, nombre: 'Ejemplo' };

const clone = {...ejemplo};

clone.nombre='Ejemplo 2';

// console.log(ejemplo);
// console.log(clone);

const { nombre, ...rest } =  ejemplo;

console.log(nombre);
console.log(rest);

