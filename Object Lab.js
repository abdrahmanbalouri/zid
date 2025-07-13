function mergeAndTransform(objects, transforms) {

    let  b = Object.assign({},...objects)
        for(const n of transforms){

            b = n(b)
        } 
        return b   
}




const objArray = [{ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 }];

const transforms = [
  (obj) => ({ ...obj, a: obj.a * 10 }),
  (obj) => {
    const { b, ...rest } = obj;
    return rest;
  },
  (obj) => (obj.e ? obj : { ...obj, e: "newKey" }),
];

const result = mergeAndTransform(objArray, transforms);

console.log(result);