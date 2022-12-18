"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathRandom = exports.mathPow = exports.divi = exports.multi = exports.sum = exports.difference = void 0;
function difference(a, b) {
    return console.log(a - b);
}
exports.difference = difference;
function sum(a, b) {
    return console.log(a + b);
}
exports.sum = sum;
function multi(a, b) {
    return console.log(a * b);
}
exports.multi = multi;
function divi(a, b) {
    return console.log(a / b);
}
exports.divi = divi;
function mathPow(a, b) {
    return console.log(Math.pow(a, b));
}
exports.mathPow = mathPow;
function mathRandom() {
    return console.log(Math.random());
}
exports.mathRandom = mathRandom;
