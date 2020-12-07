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
// console.log("il peso totale delle zucchine è di " + somma + " kg");

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


// var gruppoZucchine = {
//   zucchina1: {
//     varieta: "faenza",
//     peso: 2,
//     lunghezza: 2
//   },
//   zucchina2: {
//     varieta: "romana",
//     peso: 5,
//     lunghezza: 16
//   },
//   zucchina3: {
//     varieta: "torino",
//     peso: 7,
//     lunghezza: 23
//   },
//   zucchina4: {
//     varieta: "bologna",
//     peso: 1,
//     lunghezza: 12
//   },
//   zucchina5: {
//     varieta: "toscana",
//     peso: 4,
//     lunghezza: 14
//   },
//   zucchina6: {
//     varieta: "umbra",
//     peso: 8,
//     lunghezza: 17
//   },
//   zucchina7: {
//     varieta: "milano",
//     peso: 5,
//     lunghezza: 18
//   },
//   zucchina8: {
//     varieta: "siciliana",
//     peso: 5,
//     lunghezza: 10
//   },
//   zucchina9: {
//     varieta: "calabra",
//     peso: 3,
//     lunghezza: 27
//   },
//   zucchina10: {
//     varieta: "sarda",
//     peso: 8,
//     lunghezza: 20
//   },
//
// };
// // console.log(gruppoZucchine);
//
// var zucchineGrandi = [];
// var zucchinePiccole = [];
//
// for (var key in gruppoZucchine) {
//   if (gruppoZucchine[key].lunghezza > 15) {
//     zucchineGrandi.push(gruppoZucchine[key]);
//     // console.log(zucchineGrandi);
//   } else if (gruppoZucchine[key].lunghezza <= 15) {
//     zucchinePiccole.push(gruppoZucchine[key]);
//     // console.log(zucchinePiccole);
//   }
// };
//
// console.log(zucchineGrandi);
// console.log(zucchinePiccole);
//
// function sommaValori(array) {
//   var somma = 0;
//   for (var i = 0; i < array.length; i++) {
//     somma = array[i].peso + somma;
//   }
//   return somma
// }
//
//
// console.log("le zucchine grandi pesano " + sommaValori(zucchineGrandi) + " kg");
// console.log("le zucchine piccole pesano " + sommaValori(zucchinePiccole) + " kg");

////jsnack 4********

// Scrivi una funzione che fonda due array (con lo stesso
// numero di elementi) prendendo alternativamente gli
//
// elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// var arrayNomi = ["Giorgio", "Marco", "Carlo", "Nicola"];
//
// var arrayNumeri = [1, 2, 3, 4];
//
// var arrayMix = [];
//
// function mixElement(array1, array2) {
//
//   for (var i = 0; i < array1.length; i++) {
//
//     arrayMix.push(array1[i], array2[i]);
//     // arrayMix.push(array2[i]);
//
//   } return arrayMix;
//
// };
//
// console.log(mixElement(arrayNomi, arrayNumeri));


// jsnack 5*********

// Scrivi una funzione che accetti tre argomenti:
//
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
//
// hanno la posizione compresa tra “a” e “b”

var array = ["cetrioli", "zucchine", "melanzane", "patate", "broccoli", "lattuga", "pomodori", "spinaci"];

var b = Math.floor(Math.random() * (array.length - 1) + 1);
console.log("la variabile b è un numero grande al massimo quanto la lunghezza del nostro array, in qst caso è " + b);

var a = Math.floor(Math.random() * ((b-1) - 0));
console.log("la variabile a è un numero compreso tra 0 e b, in questo caso è " + a);





function including(array, a, b) {

  var newArray = [];

  for (var i = a; i <= b; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(including(array, a, b));
