console.log(Object.prototype);

function Person(name) {
  this.name = name;
}

console.log(Person.prototype);

Person.getName = function() {
  return this.name;
}

console.log(Person.prototype.getName); // returns undefined
console.log(Person.getName); // returns the [function] to be called

// *****************************************************************************
// Lets add a function to the Object prototype.

Object.prototype.saySomething = function() {
  return "Something";
}

console.log('Print function saySomething on Person: ' + Person.saySomething);

// *****************************************************************************
// Lets try to add a function directly to Object, instead of Object.prototype.

Object.sayDuh = function() {
  return "Duuuuh";
}

console.log('Print function sayDuh on Object: ' + Object.sayDuh);
console.log(Object.sayDuh());
console.log('Print function sayDuh on Person: ' + Person.sayDuh);

var someObject = new Object();
console.log('Print function sayDuh on someObject instance: ' + someObject.sayDuh);

// *****************************************************************************
// Lets play with __proto__ and prototype

var brunoKrebs = new Person("Bruno Krebs");
var mariaHelena = new Person("Maria Helena");

console.log(mariaHelena.__proto__);
mariaHelena.__proto__.sayName = function() {
  return `My name os ${this.name}`;
}
console.log(brunoKrebs.sayName()); // <-- this works just fine

try {
  brunoKrebs.prototype.sayWhat = function() {
    return "What";
  }
} catch (err) {
  console.log("[instance].prototype does not exist");
}
