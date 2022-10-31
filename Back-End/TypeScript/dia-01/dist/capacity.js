"use strict";
const simbolsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convert(value, UB, UC) {
    const fromIndex = simbolsCapacity.indexOf(UB);
    const toIndex = simbolsCapacity.indexOf(UC);
    const result = (toIndex - fromIndex);
    return value * Math.pow(10, result);
}
