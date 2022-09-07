function mezclar(...ingredientes) {
    return ingredientes.join(",") + " todo mezclado ahí";
};

function freir(...ingredientes) {
    const _ingredientes = [
        ...ingredientes,
        "vegetal oil"
    ];
    return _ingredientes.join(",") + " todo frito ahí";
}

function comprarIngredientes() {
    return [
        "mushrooms",
        "pasta",
        "milk cream",
        "chesee",
        "bacon"
    ];
};

function hacerAlmuerzo(ingredientes, metodoDeCocina) {
    console.log(metodoDeCocina);
    return metodoDeCocina(ingredientes);
}

console.log(hacerAlmuerzo(comprarIngredientes(), mezclar));
console.log(hacerAlmuerzo(comprarIngredientes(), freir));









// const numbers = [1, 5, 2, 9, 3, 7];

// function multiply(x, y) {
//     return x * y;
// }
// const _multiply = multiply;

// _multiply(5, 9);

// for (let index = 0; index < numbers.length; index++) {
//     console.log(multiply(5, numbers[index]));
// }


// function Dog(name) { // PascalCase
//     this.name = name;
// };

// const wotuja = new Dog("wotuja");
// console.log(wotuja);

// const snoopy = new Dog("snoopy");
// console.log(snoopy);

// const Cat = (name) => {
//     this.name = name;
// }

// const marla = new Cat("Marla");






























// function nombre( argumentos ) { bloque de código }
// function saludar(_nombre, segundoNombre) {
//     const saludo = "Hola";
//     console.log(saludo + " " + _nombre + " " + segundoNombre);
// }
// saludar("Francisco", "Jose"); // "Hola Francisco"
// console.log(saludar("Ernesto", "Manuel"));

// function contar(tope, cache = 0) {
//     if (cache <= tope) {
//         console.log(cache);
//         contar(tope, cache + 1);
//     }
//     return tope;
// };

// contar(5, 1);

// function multiplicar(factor1, factor2) {
//     let resultado = factor1;
//     for (let vez = 1; vez < factor2; vez++) {
//         resultado = sumar(resultado, factor1);
//     }
//     console.log(joselo);
//     console.log(locoHugo);
//     return resultado;
// };

// function restar(minuendo, sustraendo) {
//     return minuendo - sustraendo;
// }

// const numeroA = restar(7,2);
// console.log(multiplicar(sumar(numeroA, 5), 22));