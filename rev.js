// function f1() {
//     let a = 18;
//     let b = 15;
//     for ( let i = 0 ; i < 1 ; i++) {
//         c = a;
//         a = b;
//         b = c;
//     }
//     console.log("a =", a);
//     console.log("b =", b);
// }
// f1();

// let a = prompt("Entrez votre prix");
// console.log("prix ttc :", a*1.196);

// let pre = prompt("Entrez votre prénom");
// let name = prompt("Entrez votre nom");
// console.log("Bonjour", pre, "votre nom est", name);

// let test1 = prompt("Donnez moi un nombre");
// let test2 = prompt("Donnez moi un autre nombre");

// if (test1*test2 > 0) {
//     console.log("Le produit de vos deux nombres est positif");
// }
// else if (test1*test2 < 0) {
//     console.log("Le produit de vos deux nombres est négatif");
// }

// let age = prompt("Donnez moi votre age");

// if (age < 13) {
//     console.log("Action Man");
// }
// else if (age > 13 && age < 18) {
//     console.log("Matrix");
// }
// else if (age > 18) {
//     console.log("Evil Dead");
// }

// let nbr = parseInt(prompt("Donnez moi un nombre entre 0 et 10"));

// while (nbr < 0 || nbr > 10) {
//     console.log("Mauvaise réponse, veuillez entrer un nouveau nombre");
//     nbr = parseInt(prompt("Donnez moi un nombre compris entre 0 et 10"));
//     }
// console.log("Bonne réponse");

// let go = parseInt(prompt("Donnez moi un chiffre"));

// while (go != 0) {
//     go = go-1;
//     console.log(go);
// }

// let adeviner = 14;

// let he = parseInt(prompt("Tu dois trouver un chiffre en entrant différents chiffres, je t'indiquerai si tu chauffes ou pas"));

// while (he !== adeviner) {
//     if (he > 14) {
//         console.log("tu es trop haut");
//         he = parseInt(prompt("Entre un nouveau chiffre"));
//     }
//     else if (he < 14) {
//         console.log("tu es trop bas");
//         he = parseInt(prompt("Entre un nouveau chiffre"));
//     }
// }
// console.log("Bien joué !");

// for ( let i = 0 ; i <= 20 ; i++) {
//     console.log(i*5);
// }

// let tab1 = [10, 15, 20, 15, 14, 8];

// somme = 0;

// for ( let i = 0 ; i < 6 ; i++) {
//     somme = somme + tab1[i];
// }
// console.log(somme);

// let tab2 = parseInt(prompt("Combien avez vous d'élèves ?"))

// let notes = [];

// let count = 0;

// for ( let i = 0 ; i < tab2 ; i++) {
//     let note = parseInt(prompt("Note de l'élève ?"));
//     notes.push(note);
//     if (notes[i] >= 10) {
//         count++;
//     }
// }
// console.log(count);
