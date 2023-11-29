// ReadonlyArray - Evita las mutaciones en un array (no se puede modificar el array original, mas si se puede crear copias del mismo y modificarlas)

const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
numbers.unshift(0); // inserta un elemento al inicio del array
numbers.push(6); // inserta un elemento al final del array
//--------------------
numbers.shift(); // elimina el primer elemento del array
numbers.pop(); // elimina el último elemento del array