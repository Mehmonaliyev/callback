"use strict";

const theif = {
    height: 1.7,
    jacet:"black",
    color:{
        hair:"grey",
        style:"white",
    },
    howOut: function () {
        console.log("eshik yortdamida");
    }
};

console.log(theif);

for (const key in theif) {

    if (typeof theif[key] === "object") {
        for (let i in theif[key]) {
        console.log(`Propotaype  ${i}  has value ${theif[key][i]}`);
           
        }
    } else {
        console.log(`Propotaype  ${key}  has value ${theif[key]}`);
        
    }
}