function swappableObject(obj) {

    let k = new Map()

    for(const v in obj){
        k.set(v,obj[v])
        k.set(obj[v],v)

    }
    return Object.fromEntries(k)
}

const obj = swappableObject({ a: "apple", b: "banana" });

console.log(obj.a); // "apple"
console.log(obj.apple); // "a"
console.log(obj.b); // "banana"
console.log(obj.banana); // "b"