const logProps = require('../../util/util').logProps;

// ****************************************************************
// objects, inheriting directly from Object, have, by default, no properties
logProps(Object, 'Object');

// ****************************************************************
// what if I create my own object

let parent = {
    prop1: 'prop1',
    prop2: 2,
    method1: function() { return 'Method 1' }
};
logProps(parent, 'parent');

// ****************************************************************
// now lets create a new empty object and then extend it from myObj

let child = { };
logProps(child, 'child'); // this outputs nothing

Object.setPrototypeOf(child, parent);
logProps(child, 'child'); // this outputs parent's props

// ****************************************************************
// 'third in the line' object

let grandChild = { };
logProps(grandChild, 'grandChild'); // this outputs nothing

Object.setPrototypeOf(grandChild, child);
logProps(grandChild, 'grandChild'); // this outputs parent's props

// ****************************************************************
// lets make this grandChild a composite object

grandChild.backpack = {
    money: 2,
    scissors: 1
};

logProps(grandChild, 'grandChild'); // now with backpack, but without it's contents