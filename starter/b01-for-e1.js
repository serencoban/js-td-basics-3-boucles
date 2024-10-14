/*****************************
 * BOUCLES ET ITÉRATIONS
 * BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
 */

//******************* !!! NOTE DE COURS !!! exercice en dessous

let i = 1;      //initialisation de la variable
while (i<=42){           // la structure de controle iterative et sa condition
    console.log(i)
    i++                  // mise à jour de la variable, l'incrémentation
}

for (let i = 0; i < 10 ; i++){        //la variable i est juste dispo dans ce bloc donc si on refait une variable i, elle est diff
    console.log(i);
}

// et si on veut faure à l'envers
for (let i=9 ; i >=0 ; i--){      //il y a uen initialisation ; condition : expression incrémenté
    console.log(i);
}

console.log(i);     // cette variable ne vaut rien car elle est hors d'un bloc

for (let i =20 ; i>0; i-=2){         // la table de 2 à l'envers
    console.log(i)
}
for (let i=1 ; i <= 10; i++){        // toutes les table de multi
    for (let j= i; j<= i*10; j+=i){
        console.log(j);
    }
}

/*
let lettre: "";
while (lettre !== 'X'){
    lettre = prompt('Tapez X maj sinon vous ne passerez pas')
}

for (let lettre: ''; lettre !== 'X';){
    lettre = prompt('Tapez X maj sinon vous ne passerez pas'){
}
*/

/* 6.1. Boucle FOR
  Syntaxe :
    for (initialisation; condition; étape) {
        // instructions exécutées tant que la condition est vérifiée
    }
  Ingrédients :
    - initialisation : initialisez un compteur pour définir OÙ COMMENCER
    - condition : écrivez une condition sur le compteur pour spécifier QUAND ARRÊTER
    - étape : incrémentez le compteur pour définir COMMENT AVANCER dans la boucle
*/

/*


EXEMPLE 1 :
- Affichez les nombres de 1 à 10
  - 1°) sans utiliser de boucle : écrivez toutes les instructions à la main, une par une
  - 2°) en utilisant la boucle FOR
- Écrivez la table d'évolution des variables
*/

// 1°) sans boucle : Écrivez ici toutes les instructions à la main, une par une
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// 2°) avec boucle FOR : Écrivez ici le code de la boucle FOR
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// N.B. TABLE D'ÉVOLUTION DES VARIABLES :
//   nbre      nbre < =10           console.log(nbre)        nbre++
// nbre = 1,   1 < 5 true,           affiche 1,          nbre passe à 1+1 = 2
// nbre = 2,   2 < 5 true,           affiche 2,          nbre passe à 2+1 = 3
// ...
// nbre = 10,  10 <= 10 true,        affiche 10,         nbre passe à 10+1 = 11
// nbre = 11,  11 <= 10 FALSE,       on sort de la boucle !
