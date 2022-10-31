"use strict";
const simbolsMassa = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function converts(value, UB, UC) {
    const fromIndex = simbolsMassa.indexOf(UB);
    const toIndex = simbolsMassa.indexOf(UC);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
