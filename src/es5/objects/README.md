# Objects in Javascript

So, the most basic component of any Javascript engine implementation is, for
sure, objects. Objects are, in Javascript, based on a really simple
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

## Enumerating properties

In fact, there are three different ways to iterate over an object's properties,
or enumerate it's properties, you call it.

```js
// define singer over here, if you didn't already

// the simple for..in loop
for (let key in singer) {
  console.log(`${key}: ${singer[key]}`);
}

// using Object.keys method
Object.keys(singer); // returns [ '0', 'name', 'type', 'dob' ]
Object.keys(singer).map(key => console.log(`${key}: ${singer[key]}`));

// using Object.getOwnPropertyNames
Object.getOwnPropertyNames(singer); // returns [ '0', 'name', 'type', 'dob' ]
Object.getOwnPropertyNames(singer).map(key => console.log(`${key}: ${singer[key]}`));

// All three methods result in the same way, printing the following:
// 0: Damn, I looks some much as a normal array
// name: Elvys Presley
// type: Singer
// dob: January 8, 1935
```

### Resources

- [Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
