

function keys(json) {
    var groceryBag = JSON.parse(json);
    
    // your code starts here:
    let arrayOfKeys = [];
    
    for(let item in groceryBag) {
        arrayOfKeys.push(item);
    }

    return arrayOfKeys;
}

console.log(key(groceryBag));

/*
    key: value
    property: property value
*/