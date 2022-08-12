'use strict';

// function first() {
//     setTimeout(() => {
//         console.log(1);
//     }, 1000);
// }
// function second() {
//     console.log(2);
// }

// first();
// second();

function garage(subject, cars) {
    console.log(`this is my ${subject}`);
    cars();
}
garage("Merc", function cars() {
  console.log("that's great");  
});