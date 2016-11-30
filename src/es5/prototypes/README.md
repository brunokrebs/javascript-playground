# Protypes

Prototypes are one of the most confusing subjects in Javascript. Those who have
an object oriented programming background (like me), will have even further
trouble to understand this subject because it somewhat relates to inheritance
in this world, but it is quite different.

## First things First

Basically, what prototypes means in Javascript is delegation. Whenever you try
to call a function or property in an object, and this object does not have this
function/property, this call is delegated to __proto__ property of the main
object.

But what this __proto__ refers to? Well, at the very end all objects in
JavaScript will point to the same
[literal object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).
But to actually get to the very end of the __proto__ waterfall, there can be
innumerous steps.

Let's give a proper example to better illustrate this.

```js

function Animal() { }
function Person() { }

let someAnimal = new Animal();
let somePerson = new Person();
let someLiteralObject = {};
let somePrimitiveObject = 10;
```
