const logProps = require('../../util/util').logProps;
const log = console.log;

let myObject = {
    propWithValueA: 'a'
};

logProps(myObject, 'myObject');

try {
    myObject.prototype.duh = 'duh';
} catch (error) {
    log('\n--------------\nThere is no prototype on literal objects');
}


function MyObject() {
    this.propWithValueA = 'a'
}

let myNewObject = new MyObject();
logProps(myNewObject, 'myNewObject');

MyObject.prototype.propWithValueB = 'b';
logProps(myNewObject, 'myNewObject');

log(MyObject.prototype);
delete myNewObject.propWithValueB;
logProps(myNewObject, 'myNewObject');