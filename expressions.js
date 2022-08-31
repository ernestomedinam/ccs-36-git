const guests = 68;

function getCost(_guests) {
    if (_guests < 51) return 5000;
    if (_guests < 101) return 10000;
    if (_guests <201) return 15000;
    return 20000;
}
let count = 1;

// (condición) ? lo que hago si condicion 1 es verdadera : (condición2) ? lo que hago si condición2 es verdadera : lo que hago si condición2 es falsa
// (condición) ? lo que hago si es verdadera : lo que hago si es falsa
// (condición) && lo que hago si es verdadera

// console.log(
//     (guests < 51)
//         ? 5000
//         : (guests < 101)
//             ? 10000
//             : (guests < 201)
//                 ? 15000
//                 : 20000
// );