"use strict";
//Unknown
function demo(arg) {
    if (arg instanceof HTMLInputElement) {
        arg.value = "salut les gens";
    }
}
const a = { isprivate: true, isPublic: false };
const b = ["blaise", "Man"];
const list1 = ["tomate", 1];
const ab = ["tomate", "string"];
/**
 * list1 !== ab
 */
const list2 = ["banane", 3];
//extends pour que ca soit des tableaux qu'on ne connait pas le type des valeurs
function merge(a, b) {
    return [...a, ...b];
}
//il va conserve le type fixe du tableau
const list = merge(list1, list2);
//si on ajoute merge avec un autre type de tableau il va se debrouille
const listDiff = merge(list1, [1, 2, 5]);
const step = 4 /* STEPS.facture */;
console.log(0 /* STEPS["Intro"] */);
