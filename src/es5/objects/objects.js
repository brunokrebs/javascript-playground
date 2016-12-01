// *****************************************************************************
// Objects are (associative) arrays in Javascript.

var singer = {
  name: 'Elvys Presley',
  type: 'Singer',
  dob: 'January 8, 1935'
};

console.log(singer[0]); // nooo, not like that
console.log(singer['name']); // like that

singer[0] = 'Damn, I looks some much as a normal array';
console.log(singer[0] ? 'Now it DOES work!' : 'Nope.'); // Now it DOES work!

// *****************************************************************************
// Enumerating over objects' properties

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
