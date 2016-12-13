module.exports = {
    logProps: logProps
};

function logProps(object, label) {
    console.log('----------------- ' + label);
    let empty = true;
    for (let property in object) {
        empty = false;
        if (object.hasOwnProperty(property)) {
            console.log(property);
        } else {
            console.log(`${property} (inherited)`);
        }
    }
    if (empty) {
        console.log('- Has no props');
    }
}