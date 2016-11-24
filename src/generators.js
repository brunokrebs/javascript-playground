'use strict';

const assert = require('assert');

/***
 *
 * using a generator to count to 5
 *
 */

function *genWithoutReturn() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
}

console.log('\nWithout return - it will count till 5 then it will be done');
let iterator = genWithoutReturn();

let callWithReturn = iterator.next();
while (!callWithReturn.done) {
	console.log(callWithReturn.value);
	callWithReturn = iterator.next();
}
console.log(`Calling outside the while loop: ${callWithReturn.value}`); // undefined

/***
 *
 * using a generator to count to 4
 *
 */

function *genWithReturn() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	return 5;
}

console.log('\nWith return - it will count till 4 then it will be done');
iterator = genWithReturn();

let callWithoutReturn = iterator.next();
while (!callWithoutReturn.done) {
	console.log(callWithoutReturn.value);
	callWithoutReturn = iterator.next();
}
console.log(`Calling outside the while loop: ${callWithoutReturn.value}`); // 5

/***
 * 
 * using the third generator,
 * where a param is passed to
 * the function it self and to its yields
 * 
 */

function *genReceivingParams(value = 0) {
	var yieldParam1 = yield (value); // yieldParam1 receives the value from the iterator.next(2) on line #70
	var yieldParam2 = yield (2 * yieldParam1);
	var yieldParam3 = yield (3 * yieldParam2);
	var yieldParam4 = yield (4 * yieldParam3);
	yield (5 * yieldParam4);
}

console.log('\nPassing params');
iterator = genReceivingParams();
console.log(iterator.next().value);
console.log(iterator.next(2).value); // 4
console.log(iterator.next(3).value); // 9
console.log(iterator.next(4).value); // 16

/***
 *
 * using the new for..of syntax
 *
 */

function *yieldSomeNumbers() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
	return 6; // it will never get printed
}

for (var number of yieldSomeNumbers()) {
	console.log( number ); // 1 2 3 4 5
}

console.log( number ); // still 5, not 6

/***
 *
 * Just another testing
 *
 */

function *usingAssert() {
	let result;
	while (result != 10) {
		result = yield result;
	}
	return 42;
}

iterator = usingAssert();
console.log(iterator.next());
console.log(iterator.next(3));
console.log(iterator.next(8));
console.log(iterator.next(12));
console.log(iterator.next(10));


/***
 *
 * Sending an error to a generator
 *
 */

function *catchingError() {
	let i = 0;
	try {
		while (true) {
			console.log(i++);
			yield;
		}
	} catch (error) {
		console.log(error.message);
	}
}

iterator = catchingError();
iterator.next();
iterator.next();
iterator.next();
iterator.throw(new Error('stop'));
iterator.next(); // does literally nothing
iterator.next(); // does literally nothing
iterator.next(); // does literally nothing


/***
 *
 * Testing generators, are they really, 100%, lazy?
 *
 */

function *count() {
	console.log(`starting count generator`);
	for (let i = 0; i < 10; i++) {
		console.log(`yields ${i}`);
		yield i;
	}
}

iterator = count();
iterator.next(); // yes, they are lazy, it logs nothing until this line is executed
