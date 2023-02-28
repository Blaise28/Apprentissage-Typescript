"use strict";
//La forme de cette fonction
const cb = (e) => { };
function printId(id) {
    if (typeof id === "number") {
        // il sera capable de detecter que id est de type number
        console.log(id * 3);
    }
    else {
        //et ici de type string
        console.log(id.toUpperCase);
    }
}
function test(a, b) {
    if (a === b) {
        /**
         * dans ce cas il sera capable de dire que a et b seront des string
         * car ces dans ces deux cas possible
         * */
    }
}
function exemple(a) {
    if (isDate(a)) {
        /**
         * a sera de type Date
         */
        a;
    }
    if ("value" in a) {
        /**
         * a est de type HTMLInputElement car dans ces objets
         * value existe dans HtmlInputElement
         */
    }
}
function isDate(a) {
    /**
     * vue qu'on sait precisement le type qu'il va retourne
     * on peut dire que notre fonction retourne vrai si c'est un Date
     */
    return a instanceof Date;
}
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
