"use strict";
/**
 * vue que la methode reverse modifie le tableau original
 * et si on veut qu'il soie en lecture seul :On utilise readOnly
 * et si on veut que le retour soit en lecture seul: on utilise readonly
 * @param arr T
 * @returns T
 */
function reverse(arr) {
    //on cree un nouveau tableau puis utilise le renverse
    return [...arr].reverse();
}
class User {
    constructor(firstname) {
        this.firstname = firstname;
    }
}
class Collection {
    constructor(items) {
        this.items = items;
    }
    /**
     * On peut retourne l'instance actuelle
     */
    add(item) {
        this.items.push(item);
        return this;
    }
    first() {
        var _a;
        return (_a = this.items[0]) !== null && _a !== void 0 ? _a : null;
    }
}
const a = new Collection([
    new User("bob"),
    new User("John")
]);
console.log(a.first());
