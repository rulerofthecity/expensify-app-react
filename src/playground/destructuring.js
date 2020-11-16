// OBJECT DESTRUCTURING

const person = {
  name: "Nadeem",
  age: 34,
  location: {
    city: "Mumbai",
    temp: 25,
  },
};

console.log(`${person.name} is ${person.age}`);

const { name, age } = person;
console.log(`${name} is ${age}`);

const { temp: temperature, city } = person.location;
console.log(`${temperature} ...  ${city}`);

// ARRAY DESTRUCTURING

const address = [""];
