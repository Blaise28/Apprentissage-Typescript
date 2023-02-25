"use strict";
const a = 2;
const b = true;
const c = ["hey", "hi", "ds"];
const user = {
    firstName: "John",
    lastName: "Rambo",
};
let date = new Date();
//La forme de cette fonction
const cb = (e) => { };
function printId(id) {
    console.log(id.toString);
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
