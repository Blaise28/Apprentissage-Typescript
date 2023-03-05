"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pointer = void 0;
class Pointer {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
    }
}
exports.Pointer = Pointer;
