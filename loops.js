const teams = ["argentina", "australia", "belgica", "brazil", "canada", "croacia"];

function consoleProbability(_team) {
    console.log(`${_team} tiene una probabilidad de ${(Math.random() * 100).toFixed(2)}%`);
};

// forEach
// console.log(teams.forEach(function (team, index, _teams) {
//     console.log(index);
//     if (index > _teams.length / 2) return;
//     console.log(`${team} tiene una probabilidad de ${(Math.random() * 100).toFixed(2)}%`);
// }));
// teams.forEach((team) => {
//     console.log(`${team} tiene una probabilidad de ${(Math.random() * 100).toFixed(2)}%`);
// })
// for (let team of teams) {
//     consoleProbability(team);
// }

// map
// function calculateProbability() {
//     return `${(Math.random() * 100).toFixed(2)}%`;
// };
// const probabilities = teams.map(consoleProbability);
// console.log(teams);
// console.log(probabilities);

// filter
// const teamsWithoutMessi = teams.filter((team, index, array) => {
//     // if (team.toLowerCase() === "argentina") return false;
//     // return true;
//     return index % 2 !== 0;
//     return team.charAt(0).toLowerCase() !== "a";
// });
// console.log(teams);
// console.log(teamsWithoutMessi);


// reduce
// const transactionAmounts = [
//     250,
//     -28,
//     -182,
//     -30,
//     710,
//     -215,
//     25,
//     -50,
//     -13
// ];

// const total = transactionAmounts.reduce(
//     (_total, amount) => {
//         return _total + amount;
//     }, 0
// );
// console.log(transactionAmounts.reduce(
//     (_total, amount) => {
//         return _total + amount;
//     }, 0
// ));



// let total = 0;
// for (let amount of transactionAmounts) {
//     total = total + amount;
// } 
// console.log(total);









// const welcomeString = teams.reduce(
//     (_string, team, index) => {
//         return _string + " " + team + ",";
//     }, "Hello, teams from the world, welcome to Qatar, we salute the following:"
// );

// console.log(welcomeString);




// every
console.log(teams.every((team) => typeof team === "string"));
// some
console.log(teams.some((team) => team.charAt(0) === "c"));


























// for (let index in teams) {
//     console.log(index);
//     console.log(teams[index]); //
// };

// const dog = {
//     name: "wotuja",
//     breed: "retriever",
//     age: 1
// };

// [["name", "wotuja"], ["breed", "retriever"], ["age", 1]]

// for (let [key, value] of Object.entries(dog)) {
//     console.log(`${key}: ${value}`);
// }

// for (let attribute in dog) {
//     console.log(attribute);
//     console.log(dog[attribute]);
//     console.log(dog.attribute);
// }




// function throwDice() {
//     const result = Math.floor(Math.random() * 6 + 1) 
//     return result;
// };

// function chooseCard() {
//     const faceValues = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
//     // recorrer todo el arreglo
//     let _faceValue = faceValues[faceValues.length - 1];
//     let index = 0;
//     for (let faceValue of faceValues) {
//         // en cada iteración generar un valor entre 0 y 1
//         const value = Math.random(); // 0.65, 0.7, 0.91, 0.2
//         console.log(`para la carta ${faceValue} se obtuvo ${value}`);
//         // si >= 0.9 esta es la carta
//         if (value >= 0.9) {
//             _faceValue = faceValue;
//             console.log(index);
//             break;
//         }
//         // si < 0.9 sigo con la siguiente carta
//         index = index + 1;
//     }
//     // por defecto, devuelvo "2";
//     return _faceValue;
// }


// console.log(chooseCard());








// const player1Results = {
//     dices: [],
//     cards: []
// };

// const playerThrows2 = {
//     dices: [],
//     cards: []
// };

// for (let time = 1; time < 6; time++) {
//     const result1 = throwDice();
//     player1Results.dices.push(result1);
//     const cards = [];
//     for (let choice = 1; choice <= result1; choice++) {
//         const card = chooseCard();
//         cards.push(card);
//     }
//     player1Results.cards.push(cards);
// }

// console.log(player1Results);
// console.log(player1Results.cards[1]);
// console.log(player1Results.cards[1][0], player1Results.card);


// while(result1 !== 6 && result2 !==6) {
//     result1 = throwDice();
//     result2 = throwDice();
// }
// // do {
// //     result1 = throwDice();
// //     result2 = throwDice();
// // } while(result1 !== 6 && result2 !==6);

// if (result1 === 6 && result2 === 6) {
//     console.log("ganaron los dos! Osea, ninguno! jajaja");
// }else if (result1 === 6) {
//     console.log("Ganó el primero!");
// } else {
//     console.log("Ganó el segundo!");
// }



















// for (let _throw = 1; _throw < 6; _throw++) {
//     const result1 = throwDice();
//     playerThrows1.push(result1); 
//     if (playerThrows2.length < 3) {
//         const result2 = throwDice();
//         playerThrows2.push(result2); 
//     }
// }

// let total1 = 0;
// let total2 = 0;
// for (let index = 0; index < playerThrows1.length; index++) {
//     total1 = total1 + playerThrows1[index];
// }
// console.log("primer index:", index);

// for (let index = 0; index < playerThrows2.length; index++) {
//     total2 = total2 + playerThrows2[index];
// }


// console.log("segundo index:", index);
// console.log(playerThrows1, total1);
// console.log(playerThrows2, total2);