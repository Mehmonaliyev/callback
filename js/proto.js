"use strict";

const merc = {
    motor: "X",
    isAirbag: true,
    color: "Black",
    isSpead: function() {
        console.log(320);
    }
}

const gm = {
    isAirbag: false,
}

Object.setPrototypeOf(gm, merc);
console.log(gm);

console.log(gm.color);

const bmw = Object.create(merc);
console.log(bmw);