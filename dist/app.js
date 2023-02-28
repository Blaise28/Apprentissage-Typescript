"use strict";
window.GoogleAnalytics;
//on peut aussi les implementes
class Triangle {
    constructor() {
        this.x = 3;
        this.y = 4;
        this.z = 2;
    }
    get() {
        return this.x;
    }
}
function draw(p) { }
/**
 * vue que draw attend comme argument de type Point
 * les classes qui implementes cette interface seront le bienvenue
 * */
draw(new Triangle());
