let absurdArray = [1, [2], [3, [[4]]]];

function flatten(array) {
    
    let flatterArray = [];

    for(let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            flatterArray.push.apply(flatterArray, flatten.apply(this, array[i]));
        } else {
            flatterArray.push(array[i]);
        }
    }
    return flatterArray;
}

function flatten(array) {
    let flatterArray = [];

    array.forEach(element => {
        if(Array.isArray(element)) {
            flatterArray.push(...flatten(element))
        } else {
            flatterArray.push(element)
        }
    })
    return flatterArray;
}