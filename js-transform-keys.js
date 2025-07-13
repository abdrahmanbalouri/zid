function transformKeys(obj, transformFn) {
    if(typeof obj!=='object') return obj
    
     let  k ={}
    for(const g in obj){

        let b = transformFn(g)

        k[b] = transformKeys(obj[g],transformFn)
                         
    }
    return k
}
const obj = {
  FirstName: "Alice",
  LastName: "Doe",
  Address: {
    StreetName: {"Main St":'dssd','KKKKK':'fsdsg'},
    ZipCode: 12345,
  },
};

const toSnakeCase = (key) =>
  key
    .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
    .replace(/^_/, "");
const transformed = transformKeys(obj, toSnakeCase);
console.log(transformed);
