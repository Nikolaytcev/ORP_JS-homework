export function orderByProps(obj, attributes) {
    let propList = [];
    const sortObj = {};
    Object.keys(obj).sort().forEach(function(key) {sortObj[key] = obj[key]});
    for (let i = 0; i < attributes.length ; i++) {
        propList.push({key: attributes[i], value: obj[attributes[i]]})
    }
    for (let prop in sortObj) {
        if (!attributes.includes(prop)) {
            propList.push({key: prop, value: sortObj[prop]})
        }
    }
    return propList
}