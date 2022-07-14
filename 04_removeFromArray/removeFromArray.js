const removeFromArray = function(...args) {
    const array = args[0];
    const clean = [];

    array.forEach((item) => {
        if(!args.includes(item)) {
            clean.push(item);
        }

    })
    return clean;
}

// Do not edit below this line
module.exports = removeFromArray;
