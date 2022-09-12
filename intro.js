// var name = "Ernesto";
// let age = 38;
// const venezuelan = true;
// const _undefined = undefined;
// const _null = null;
// const dog = {
//     hairColor: "black",
//     breed: "Boxer",
//     age: 1.2,
//     name: "Wotuja",
//     owner: {
//         name: "Rosaury",
//         address: "Chacao",
//         phone: "02129955555"
//     },
//     vaccines: [
//         "covid19",
//         {
//             name: "antirabia",
//             dosage: "0.5cc"
//         },
//         ["polio", "la otra"]
//     ],
//     bark: function(times) { // 5
//         // for (inicia; criterio; incremento/decremento) {bloque}
//         for (let time = 1; time <= times; time = time + 2) {
//             console.log("guau");
//         }
//     },
//     fetch: function(stickDistance) {
//         // if (condición) {bloque si la condición se resuelve a true}
//         // else if (condición) {bloque si no...}
//         // else {bloque si no...}
//         if (this.breed === "Retriever") {
//             console.log(`El perro salió corriendo detrás del palo, recorrió ${stickDistance} metros y volvió.`);
//         } 
//         if (this.breed === "Boxer") {
//             console.log(`El perro salió corriendo detrás del palo, recorrió ${stickDistance} metros y se quedó cuidando un bebé de otra familia.`)
//         } else {
//             console.log("El perro vio el palo y se quedó echado.")
//         }
//     }
// };

// dog.bark(5);
// dog.fetch(40);


var uno = 1;
var unoString = "1";

console.log(uno == unoString); 
// YES, sólo evalúa que 1 vale 1 y "1" también

console.log(uno === unoString); 
// NO, porque solo son iguales en valor, pero son de distinto tipo

const names = ["Ernesto"];
const otroNames = names;

otroNames.push("Daniel");

console.log(otroNames === names);
console.log(names);

console.log(['1'] === ['1']);

// const list = [
//     "primero", // 0
//     "segundo", // 1
//     50, // 2
//     false, // 3
//     null, // 4
//     undefined // 5... list.length - 1
// ]; // arreglos

// list[4] = "galactica";

// console.log(typeof list);
// console.log(Array.isArray("patrañas"));
// console.log(Array.isArray(list));








// console.log(typeof age);
// console.log(typeof name);
// console.log(typeof venezuelan);
// console.log(typeof _undefined);
// console.log(typeof _null);
// console.log(typeof list);
// console.log(typeof myObject);