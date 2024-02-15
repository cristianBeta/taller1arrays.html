// Crea un array con al menos 5 nombres de personas.
let personas = ['juan','pedro','carlos','mauricio','luis'];
// Recorre el array e imprime cada nombre en la consola.
console.log('person');
nombre.forEach(nombre =>{
    console.log(nombre);
});
// Imprime la longitud del array.
console.log(' la longitud del array es:m', nombres.length);

//Ejercicio 2: Agregar y eliminar elementos de un array 
//• Crea un array vacío. 
let miArray = [];

// Agrega al menos 3 elementos al array utilizando diferentes métodos.
miArray.push("Elemento 1"); // Agrega al final del array
miArray.unshift("Elemento 0"); // Agrega al principio del array
miArray[2] = "Elemento 2"; // Agrega en una posición específica

// Imprime el array antes de las eliminaciones.
console.log("Array antes de las eliminaciones:", miArray);

// Elimina el último elemento del array.
miArray.pop();

// Elimina un elemento específico del array por su índice.
delete miArray[0];

// Imprime el array final después de las modificaciones.
console.log("Array después de las modificaciones:", miArray);

//ejercicio numero 3
// Crea un array con al menos 10 elementos de diferentes tipos.
const array = [1, "dos", true, 4.5, "cinco", false, 7, "ocho", 9, "diez"];

// Busca un elemento específico en el array por su valor.
const elementoBuscado = "ocho";
const indice = array.indexOf(elementoBuscado);

// Imprime la posición (índice) del elemento encontrado o un mensaje si no se encuentra.
if (indice !== -1) {
    console.log(`El elemento "${elementoBuscado}" se encuentra en la posición ${indice}.`);
} else {
    console.log(`El elemento "${elementoBuscado}" no se encuentra en el array.`);
}

// Bonus: Usa el método find para realizar la búsqueda.
const elementoEncontrado = array.find(elemento => elemento === elementoBuscado);
if (elementoEncontrado !== undefined) {
    const indiceFind = array.findIndex(elemento => elemento === elementoBuscado);
    console.log(`Usando el método find, el elemento "${elementoBuscado}" se encuentra en la posición ${indiceFind}.`);
} else {
    console.log(`Usando el método find, el elemento "${elementoBuscado}" no se encuentra en el array.`);
}
//ejercicio numero 4
// Crea un array con números aleatorios.
let numero = [7, 2, 10, 5, 3];

// Imprime el array antes de ordenarlo.
console.log("Array antes de ordenarlo:", numeros);

// Ordena el array de forma ascendente.
numeros.sort((a, b) => a - b);

// Imprime el array después de ordenarlo de forma ascendente.
console.log("Array ordenado de forma ascendente:", numeros);

// Ordena el array de forma descendente.
numeros.sort((a, b) => b - a);

// Imprime el array después de ordenarlo de forma descendente.
console.log("Array ordenado de forma descendente:", numeros);

//ejercicio numero 4
// Crea un array con nombres de personas y sus edades.
const persona = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 17 },
    { nombre: "Pedro", edad: 30 },
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 18 }
];

// Filtra el array para obtener solo los nombres de las personas mayores de edad.
const personasMayores = personas.filter(persona => persona.edad >= 18);

// Imprime los nombres de las personas que cumplen con el criterio.
console.log("Nombres de personas mayores de edad:");
personasMayores.forEach(persona => {
    console.log(persona.nombre);
});

// Usa un bucle para recorrer el array filtrado y realizar alguna acción con cada elemento.
console.log("Mensaje para cada persona mayor de edad:");
personasMayores.forEach(persona => {
    console.log(`¡Hola ${persona.nombre}! Eres mayor de edad.`);
});
//ejercicio numero 6
// Crea dos arrays con diferentes elementos.
const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];

// Combina los dos arrays en un solo array nuevo.
const arrayCombinado = [...array1, ...array2];

// Imprime el array combinado.
console.log("Array combinado:", arrayCombinado);

//ejercicio numero 7
// Crea un array con elementos duplicados.
const arrayConDuplicados = [1, 2, 3, 2, 4, 1, 5, 3];

// Elimina los elementos duplicados del array.
const arraySinDuplicados = [...new Set(arrayConDuplicados)];

// Imprime el array sin duplicados.
console.log("Array sin duplicados:", arraySinDuplicados);

// ejercicio numero 8

// Crea un array con números.
const numeros = [10, 5, 3, 8, 15, 4];

// Encuentra el valor máximo del array.
const maximo = Math.max(...numeros);

// Encuentra el valor mínimo del array.
const minimo = Math.min(...numeros);

// Imprime el valor máximo y mínimo.
console.log("Valor máximo:", maximo);
console.log("Valor mínimo:", minimo);

//ejercicio numero 9
// Crea un array con objetos que tengan una propiedad en común.
const productos = [
    { nombre: "Camisa", color: "Azul", precio: 20 },
    { nombre: "Pantalón", color: "Negro", precio: 30 },
    { nombre: "Vestido", color: "Rojo", precio: 40 },
    { nombre: "Zapatos", color: "Negro", precio: 50 },
    { nombre: "Bufanda", color: "Azul", precio: 15 }
];

// Función para agrupar elementos del array por la propiedad común.
function agruparPorPropiedad(array, propiedad) {
    return array.reduce((agrupado, producto) => {
        const valorPropiedad = producto[propiedad];
        (agrupado[valorPropiedad] = agrupado[valorPropiedad] || []).push(producto);
        return agrupado;
    }, {});
}

// Agrupa los elementos del array por el valor de la propiedad 'color'.
const productosAgrupadosPorColor = agruparPorPropiedad(productos, 'color');

// Imprime los productos agrupados por color.
console.log("Productos agrupados por color:", productosAgrupadosPorColor);

//ejercicio numero 10

// Crea un array con elementos de diferentes tipos.
const arrays = ["nombre", 25, true, { clave: "valor" }];

// Convierte el array en un objeto.
const objeto = {};

array.forEach((elemento, indice) => {
    objeto[`propiedad${indice}`] = elemento;
});

// Imprime el objeto resultante.
console.log("Objeto resultante:", objeto);

// ejercicio numero 11

// Definimos una clase Producto para representar los productos
class Producto {
    constructor(nombre, descripcion, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

// Creamos un array para almacenar los productos
let inventario = [];

// Función para agregar un nuevo producto al inventario
function agregarProducto(nombre, descripcion, precio, cantidad, categoria) {
    const nuevoProducto = new Producto(nombre, descripcion, precio, cantidad, categoria);
    inventario.push(nuevoProducto);
    console.log("Producto agregado exitosamente:", nuevoProducto);
}

// Función para listar todos los productos del inventario
function listarProductos() {
    console.log("Inventario:");
    inventario.forEach(producto => console.log(producto));
}

// Función para buscar un producto por su nombre
function buscarProducto(nombre) {
    const productoEncontrado = inventario.find(producto => producto.nombre === nombre);
    if (productoEncontrado) {
        console.log("Producto encontrado:", productoEncontrado);
    } else {
        console.log("Producto no encontrado.");
    }
}

// Función para eliminar un producto del inventario
function eliminarProducto(nombre) {
    inventario = inventario.filter(producto => producto.nombre !== nombre);
    console.log("Producto eliminado exitosamente:", nombre);
}

// Función para actualizar la cantidad en stock de un producto
function actualizarStock(nombre, nuevaCantidad) {
    const producto = inventario.find(producto => producto.nombre === nombre);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        console.log("Stock actualizado para", nombre, ":", nuevaCantidad);
    } else {
        console.log("Producto no encontrado.");
    }
}

// Ejemplo de uso de las funciones
agregarProducto("Camisa", "Camisa de algodón", 20, 50, "Ropa");
agregarProducto("Pantalón", "Pantalón de mezclilla", 30, 30, "Ropa");
listarProductos();
buscarProducto("Camisa");
eliminarProducto("Pantalón");
listarProductos();
actualizarStock("Camisa", 60);
listarProductos();