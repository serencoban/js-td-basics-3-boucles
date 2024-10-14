/*****************************
 * BOUCLES ET ITÉRATIONS
 * BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
 */

/* 6.1. Boucle FOR
  Syntaxe :
    for (initialisation; condition; étape) {
        // instructions exécutées tant que la condition est vérifiée
    }
  Ingrédients :
    - initialisation : on initialise un compteur pour dire OÙ ON COMMENCE
    - condition : on écrit une condition sur le compteur pour dire QUAND ON S'ARRÊTE
    - étape : on incrémente le compteur pour dire COMMENT ON AVANCE dans la boucle
*/

/* EXEMPLE 4 :
- Affichez les 10 premières valeurs de la table de multiplication choisie par l'utilisateur
  1. Demandez à l'utilisateur de choisir la table de multiplication qu'il souhaite afficher :
    "Je voudrais afficher les 10 premières valeurs de la table de multiplication par"
  2. Affichez le résultat avec :
    - un titre : "Voici les 10 premières valeurs de la table de multiplication par …"
    - pour chaque valeur, le calcul et le résultat (par exemple : 1 * 7 = 7)
  3. Tentez d'afficher la valeur de i après être sorti de la boucle…
    - que se passe-t-il si vous avez déclaré i avec let ?
    - que se passe-t-il si vous déclarez i avec var ?
*/
// il faut que le prompt soit un nbr

const table=parseInt(prompt(`Je voudrais afficher les 10 premières valeurs de la table de multiplication par :`))
console.log(`Voici les 10 premières valeurs de la table de multiplication par ${table}`)
if(table){
    if (table >0){   //certain que j'ai un nombre +
        for (let i= 1; i<=10; i++ )            //table*10 donc 20
            console.log(`${i} * ${table} = ${i*table}`)

    }else {          //j'ai pas de nombre +
        console.log('Entrez un nombre positif');
    }
}else {
    console.log("Entrez un nombre")
}
