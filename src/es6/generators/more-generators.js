const log = console.log;

// *****************************************************************************
// What kind of object is this generator?
log(`====================================================`);
function *myGen() {
    yield 1;
}

log(`Type of myGen: ${typeof myGen}`); // function
log(`myGen: ${myGen}`); // function's contents

log(`----------------------------------------------------`);

let myGenI = myGen();
log(`Type of myGenI: ${typeof myGenI}`); // object
log(`myGenI: ${myGenI}`); // [object Generator]
log(`====================================================`);

