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
const scroll_to_1 = require("scroll-to");
(0, scroll_to_1.default)(500, 1200, {
    ease: 'out-bounce',
    duration: 1500
});
