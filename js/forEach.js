'use strict';


const arr = [8, 2, 7, 44 ,55];

// arr.forEach(function(iteam, index,  arr){
//     console.log(`${index} : ${iteam} into arr ${arr}`);
// })

//  keyingi dars sortirofka

arr.sort(compFero);
console.log(arr);

function compFero(a , b ) {
    return a-b;
}