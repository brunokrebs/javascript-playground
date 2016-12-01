var singer = {
  name: 'Elvys Presley',
  type: 'Singer',
  dob: 'January 8, 1935'
};

console.log(singer[0]); // nooo, not like that
console.log(singer['name']); // like that

singer[0] = 'Damn, I looks some much as a normal array';
console.log(singer[0] ? 'Now it DOES work!' : 'Nope.'); // Yes, it does.

for (let prop in singer) {
  console.log(`${prop}: ${singer[prop]}`);
}

// This last loop prints the following:
// 0: Does this works?
// name: Elvys Presley
// type: Singer
// dob: January 8, 1935
