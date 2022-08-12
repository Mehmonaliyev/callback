"use strict"

const person = {
    age: 24,
    name: "Ibratjon",
    from: "Fergana",
    cars: {
        first:"nexia 3",
        second:"lacetti",
        futureCars:"MercedesBensz s class"
    }

}

const {age, name, from } = person;
console.log(age);
console.log(name);
console.log(from);


const {first, second, futureCars} = person.cars;
console.log(first);
console.log(second);
console.log(futureCars);