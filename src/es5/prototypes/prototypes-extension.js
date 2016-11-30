// *****************************************************************************
// Our simples constructor function that will be used to generate persons
function Person(name) {
  this.name = name;

  this.greet = function() {
    return `${name} says: Hello there, friend.`;
  }
}

// *****************************************************************************
// Lets define two instances of Person and make them greet.
let brunoKrebs = new Person("Bruno Krebs");
let mariaHelena = new Person("Maria Helena");
console.log(brunoKrebs.greet());
console.log(mariaHelena.greet());

// *****************************************************************************
// Now let's add a function to mariaHelena and try to call it on both instances,
// mariaHelena and brunoKrebs.
mariaHelena.getHair = function() {
  return {
    color: 'Blonde',
    size: 50
  };
}

console.log(mariaHelena.getHair()); // this works perfectly
try {
  // this won't work, no getHair method was added to all Person's instance
  console.log(brunoKrebs.getHair());
} catch (error) {
  console.log(`Actually, ${brunoKrebs.name} has no getHair method. He is bald.`);
}

// *****************************************************************************
// Now lets add a getTime method to Persons.prototype. This way all instances
// of Person, created or to be created, will be enable to respond with time.
Person.prototype.getTime = function() {
  return `${this.name} says: It's ` + new Date();
}

console.log(brunoKrebs.getTime());
console.log(mariaHelena.getTime());
