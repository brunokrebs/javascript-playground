# Objects in Javascript

So, the most basic component of any Javascript engine implementation is, for
sure, objects. Objects are in Javascript are based in a really simple
concept. They are arrays. Yes, you read it right, they are arrays, but of a
special kind. Objects are associative arrays. Take a look.

```js
var singer = {
  name: 'Elvys Presley',
  type: 'Singer',
  dob: 'January 8, 1935'
};

console.log(singer[0]); // nooo, not like that
console.log(singer['name']); // like that

singer[0] = 'Does this works?';
console.log(singer[0] ? 'Now it DOES work!' : 'Nope.'); // Yes, it does.
```

See, you can access object's properties in a way that is very similar with
normal arrays. Besides that, you can even iterate in a for..in loop on object
properties. Wanna see?

```js
var singer = {
  0: 'Damn, I looks some much as a normal array',
  name: 'Elvys Presley',
  type: 'Singer',
  dob: 'January 8, 1935'
};

for (let prop in singer) {
  console.log(`${prop}: ${singer[prop]}`);
}

// This last loop prints the following:
// 0: Damn, I looks some much as a normal array
// name: Elvys Presley
// type: Singer
// dob: January 8, 1935
```
