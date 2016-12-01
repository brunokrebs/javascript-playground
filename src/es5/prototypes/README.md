# Protypes

Prototypes is one confusing subject in Javascript, as [Mozilla also
states](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- great resource by the way. Those who have an object oriented programming (OOP)
background (like me), will have even further trouble to understand this subject
because it somewhat relates to inheritance in OOP, but it is quite different.

## First things First

Basically, what prototypes means in Javascript is delegation. Whenever you try
to call a function or property in an object, and this object does not have this
function/property, this call is delegated to [[Prototype]] (the correct notation
to refer to __proto__) property of the main object.

But what this [[Prototype]] refers to? Well, at the very end all objects in
JavaScript will point to the same [literal object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).
But to actually get to the very end of the [[Prototype]] waterfall, there can be
innumerous steps.

Let's give a proper example to better illustrate this.

```js
function Animal() { }
function Person() { }

let someAnimal = new Animal();
let somePerson = new Person();
let someLiteralObject = {};
let refToPrimitive = 10;
```

After executing the previous code, we will have in memory four different objects
- someAnimal, somePerson, someLiteralObject and refToPrimitive. Even though
these objects are distinct, they have something in common and that is the 'God
object' (I think I just invented this term, but will keep until I find a more
convenient/correct one). Take a look at the execution of the following code:

```js
// be sure to run the previous code to load the variables

console.log(Function.__proto__); // references an empty function
console.log(Object.__proto__); // references the same empty same function above
console.log(Function.__proto__ === Object.__proto__); // true

const theEmptyFunction = Object.__proto__;

// even the empty function refers to this "God" object
console.log(theEmptyFunction.__proto__); // references the 'God' object
const theGodObject = theEmptyFunction.__proto__;

// primitives also refer, in the end of the chain, to the "God" object
console.log(refToPrimitive.__proto__); // references Number
console.log(refToPrimitive.__proto__.__proto__); // references the "God" object
console.log(theGodObject === refToPrimitive.__proto__.__proto__); // true

// so the objects created upon Animal and Person will refer to "God"
// down the chain as well
console.log(Person.__proto__ === theEmptyFunction); // true
console.log(Person.__proto__.__proto__ === theGodObject); // true, of course
console.log(Animal.__proto__.__proto__ === Person.__proto__.__proto__); // true

// lets not forget to show that someLiteralObject also has the same "God"
console.log(someLiteralObject.__proto__ === theGodObject); //true
```

As you can see, every single reference, literal, primitive or built with
constructors functions, eventually end up having the "God" object as the base
prototype.

From the above examples, the one that has the shortest path to "God" is the
object literal. This happens because everything else ends up boxed

## The endless [[prototype]] chain

Well, it is not endless, but it can (virtually) be endless. As you saw

## But, can we change some reference's "God" to be another one?

Looks like we can. Let's say that we want one kind of object to "worship"
another god, this time [Apollo - god of music, arts, knowledge and others](https://en.wikipedia.org/wiki/Apollo).


```js
const Apollo = {
  likesMusic: function() {
    console.log(`Of course I do!`);
    return true;
  }
};
const theEmptyFunction = Object.__proto__;
const theGodObject = theEmptyFunction.__proto__;

function Musician(instrument) { this.instrument = instrument };
let elvisPresley = new Musician("guitar");

console.log(Musician.__proto__ === theEmptyFunction); // true
console.log(Musician.__proto__.__proto__ === theGodObject); // true

console.log(elvisPresley.likesMusic); // undefined, Elvis still
                                      // doesn't worship Apollo

Musician.__proto__.__proto__ = Apollo;

let madonna = new Musician();

```

### Resources
- [__proto__ vs prototype (on YouTube)](https://www.youtube.com/watch?v=DqGwxR_0d1M) -
he is a little bit confusing, but he is funny.
- [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain). -
Mozilla's explanation.
