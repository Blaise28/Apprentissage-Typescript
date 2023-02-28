"use strict";
const User = { firstname: "Blaise" };
let date = "2023/02/13 4:20:3";
let id = 2;
/**
 * ca doit extends d'un objet qui contient une cle lenght qui serai de type number
 * @param arg TYpe
 * @returns Type
 */
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
const ab = consoleSize(["asd", 1]);
/**
 * on lui donne le type qu'on souhaite et celui qu'il va retourne
 * @param a ArgType
 * @returns ArgType
 */
function Gcool(a) {
    return a;
}
let cool = Gcool(3);
let coll = Gcool("salut les gens");
function first(a) {
    return a[0];
}
let first_str = first(["azez", "sddsd", "glkd"]);
let firstEl = first([0, true, "sddsd", "glkd"]);
const compteur = document.querySelector("#compteur");
let i = 0;
const increment = (e) => {
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector("span");
    if (span) {
        span.textContent = i.toString();
    }
};
/**
 * ? veut dire n'utilise compteur que s'il existe
 */
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener("click", increment);
