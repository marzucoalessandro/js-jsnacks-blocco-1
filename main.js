//snack1A//

// palla = {
//   name: "palla",
//   peso: 10,
// }


//snack1B//

// var domanda = prompt("quale è il peso della palla?");
// palla.peso = domanda;

//snack2//
// / Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

 //  var listaBici = [
 //   {
 //     name: "ktm",
 //     peso: 10
 //   },
 //   {
 //     name: "cannondale",
 //     peso: 12
 //   },
 //   {
 //     name: "cube",
 //     peso: 14
 //   }
 // ];
 //
 // var minPeso = listaBici[0].peso
 //
 // for (var i = 0; i < listaBici.length; i++) {
 //   if (listaBici[i].peso < minPeso) {
 //     minPeso = listaBici[i].peso;
 //
 //   };
 // }
 // console.log("la bicicletta col peso minore pesa "+ minPeso + " kg");



// snack 3///
// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.
// (ripassiamo il Teorema di Pitagora ;D )

// triangolo = {
//   base: 10,
//   altezza: 5
// }
// var base = triangolo.base;
// var h = triangolo.altezza;
//
// //per calcolare il perimetro dobbiamo prima trovare l'ipotenusa:
// var ipotenusa = Math.sqrt((base ** 2) + (h ** 2));
//
// var area = (base * h) / 2;
// var perimetro = Math.round(ipotenusa) + base + h;
//
// console.log("l'area del triangolo misura " + area,"il perimetro del triangolo misura " + perimetro);




// snack 4A e 4B//

// squadre = [
//   {
//     name: "juventus",
//     puntifatti: 0,
//     fallisubiti: 0
//   },
//   {
//     name: "milan",
//     puntifatti: 0,
//     fallisubiti: 0
//   },
//   {
//     name: "napoli",
//     puntifatti: 0,
//     fallisubiti: 0
//   }
// ]
//
//
// for (var i = 0; i < squadre.length; i++) {
//   squadre[i].puntifatti = Math.floor(Math.random() * 10);
//   squadre[i].fallisubiti = Math.floor(Math.random() * 10);
// }
//{

// //***********funziona ma è sbagliato da usare***************
// // for (var key in squadre) {
// //   squadre[key].puntifatti = Math.floor(Math.random() * 10);
// //   squadre[key].fallisubiti = Math.floor(Math.random() * 10);
// // }
//
// //  NON USARE IL CICLO FOR IN con gli array***************
// console.log(squadre);


///////snack blocco 5**************************

// jsnack 1****

// var gruppoZucchine = {
//   zucchina1: {
//     varieta: "faenza",
//     peso: 2,
//     lunghezza: 2
//   },
//   zucchina2: {
//     varieta: "faenza",
//     peso: 5,
//     lunghezza: 2
//   },
//   zucchina3: {
//     varieta: "faenza",
//     peso: 7,
//     lunghezza: 2
//   },
//   zucchina4: {
//     varieta: "faenza",
//     peso: 1,
//     lunghezza: 2
//   },
//   zucchina5: {
//     varieta: "faenza",
//     peso: 4,
//     lunghezza: 2
//   },
//   zucchina6: {
//     varieta: "faenza",
//     peso: 8,
//     lunghezza: 2
//   },
//   zucchina7: {
//     varieta: "faenza",
//     peso: 5,
//     lunghezza: 2
//   },
//   zucchina8: {
//     varieta: "faenza",
//     peso: 5,
//     lunghezza: 2
//   },
//   zucchina9: {
//     varieta: "faenza",
//     peso: 3,
//     lunghezza: 2
//   },
//   zucchina10: {
//     varieta: "faenza",
//     peso: 8,
//     lunghezza: 2
//   },
//
// };
//
// console.log(gruppoZucchine);
// var somma = 0;
// for (var key in gruppoZucchine) {
//   var somma = gruppoZucchine[key].peso + somma;
//
// }
//
// console.log(somma);

//jsnack 2********

// var parola = "collina";
//
// function stringaReverse (stringa) {
//
//   return stringa.split("").reverse().join("");
// };
//
// console.log(stringaReverse(parola));

//jsnack 3*************
