function transformKeys(obj, transformFn) {
    if(typeof obj!=='object') return obj

    if(Array.isArray(obj)){
     let  l =[]
       for(let i=0;i<obj.length;i++){
                if(typeof obj[i]!=='object'){
                           l.push(obj[i])

                }else{

                 let b =  transformKeys(obj[i],transformFn)
                 console.log(b);
                 
                    l.push(JSON.stringify(b))                 
                }

               
       }
       return l
    } 

    
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
    ZipCode: [1,2,3,4,{'KL':'k'}],
  },
};

const toSnakeCase = (key) =>
  key
    .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
    .replace(/^_/, "");
const transformed = transformKeys(obj, toSnakeCase);
console.log(transformed.address.zip_code[4]);
