{
	let myVar = 'first declaration';
	console.log(myVar);
}

// this would run on NodeJS and not that old browsers:
// console.log(myVar);

for (let i = 0; i < 10; i++) {
	let x = i * 2;
	console.log(`${i} * 2 = ` + x);
}

// this also would work
// console.log(`${i} * 2 = ` + x);

for (var i = 0; i < 10; i++) {
	var x = i * 2;
	console.log(`${i} * 2 = ` + x);
}

console.log(`This does work: ${i} * 2 = ` + x);