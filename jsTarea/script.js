//Control de flujo y manejo de errores
function esNumero(expresion) {
    if (isNaN(expresion)) {
        alert("No es un dígito");
    } else {
        alert("es un dígito");
    }
}
//switch
function frutaCompr(expresion) {
    switch (expresion) {
        case "naranjas":
            document.precioFruta.texto.value = "Las naranjas cuestan 500 colones";
            break;
        case "manzanas":
            document.precioFruta.texto.value = "Las manzanas cuestan 600 colones";
            break;
        case "platanos":
            document.precioFruta.texto.value = "Los platanos cuestan 100 colones";
            break;
        case "cerezas":
            document.precioFruta.texto.value = "Las cerzass cuestan 750 colones";
            break;
        case "mangos":
        case "papayas":
            document.precioFruta.texto.value =
                "Las mangos y papayas cuestan 500 colones";
            break;
        default:
            document.precioFruta.texto.value =
                "Lo lamentamos, por el momento no disponemos de " + expresion + ".)";
    }
}

//Error
try {
    throw new Error("¡Ups!");
} catch (e) {
    console.error(e.name + ": " + e.message);
}
//Error
try {
    funcionFalsa();
} catch (error) {
    console.error(error);
}

//Bucles

for (var i = 0; i < 10; i++) {
    console.log(i);
}

n = 0;
x = 0;
while (n < 3) {
    n++;
    x += n;
}

function ejmDoWhile() {
    let result = '';
    let a = 0;

    do {
        a = a + 1;
        result = result + i;
    } while (a < 5);

    console.log(result);
}


//Funciones
function ejmFunctionPotencia(number) {
    if (isNaN(number))

        alert("Digite un valor numérico");
    else

        document.potenciaCalc.potenciaNumber.value = "Resultado" + Math.pow(number, 2);
}


//Comparación

console.log(1 == 1);


//Operadores artimeticos * / + - += -= *= 
console.log("Operadores aritméticos");
console.log(3 * 3);
console.log(23 * 23);
console.log(3 + 5);
console.log(10 / 5);

//Operadores lógicos
if (3 == 3 && 3 == 4) {
    console.log("Expresión verdadera")
}

if (3 == 4 || 4 == 4) {
    console.log("Expresión verdadera")
}

//Number

//Convierte string a número, si no puede devuelve false
console.log(Number.isNaN("a21"));
console.log(Number.isNaN("21"));

//Evalúa si es entero
console.log(Number.isInteger(12.2));


//Math 
//es un objeto incorporado que
//tiene propiedades y métodos para constantes y funciones matemáticas. No es un objeto de función.

console.log(Math.pow(21, 312));
console.log(Math.sqrt(22, 12));
console.log(Math.PI);

//Date
console.log(Date.now());
console.log(Date.UTC());
console.log(Date.parse("Aug 9, 1995"));

//Cadenas literales
let a = 5;
let b = 10;
console.log('Quince es ' + (a + b) + ' y\nno ' + (2 * a + b) + '.');

//String
console.log(b.toString());
let ejmLen = "Fabio";
console.log(ejmLen.length);
let str = "Apple, Banana, Kiwi";
console.log(str.slice(7, 13));


//Arreglos

let frutas = ["Manzana", "Banana"];

console.log(frutas.length);
console.log(frutas.pop());
let nuevaLongitud = frutas.unshift('Fresa');
frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
})


//Arreglos tipados
let buffer = new ArrayBuffer(16);
if (buffer.byteLength === 16) {
    console.log("Sí, son 16 bytes");
} else {
    console.log("¡Oh no, es del tamaño incorrecto!");
}
//-------------------------------------
//conversión arreglo tipado a normal
let typedArray = new Uint8Array([1, 2, 3, 4]),
    normalArray = Array.prototype.slice.call(typedArray);
normalArray.length === 4;
normalArray.constructor === Array;

//dom

//por id

console.log(document.getElementById("isNumber"));

//por clase
ejmClass = document.getElementsByClassName("ejmClass");
console.log(ejmClass.innerText);

//por elemento
console.log(document.getElementsByTagName("h3"));

//Por selector css
console.log(document.querySelector("#poten").innerHTML);