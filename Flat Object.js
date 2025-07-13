let t = 0
function flattenAndMap(obj, mapper,rep='',result ={}) {
 

    for(const v in obj){

   let value = obj[v]
   let keyss = rep ? `${rep}.${v}`:`${v}`
   
     if(typeof value == 'object'){
        if(Array.isArray(value)){
                        result[keyss] = []
 t++
            for(let i = 0;i<value.length;i++){
                        
                if(typeof value[i]!=='object'){
                   let c= mapper(value[i])
                   
                 
                   result[keyss].push(c)



                }else{
                flattenAndMap(value[i],mapper,keyss,result)


                }
            }



        }else{
                 flattenAndMap(value,mapper,keyss,result)

        }


    }  else{

           let c =  mapper(value)
          t++
           
           result[keyss]=c
     }
    }
    return {result,t}
}

const nestedObj = {
  user: {
    name: "Alice",
    address: {
      city: "Wonderland",
      zip: 12345,
    },
  },
  meta: {
    roles: ["admin", "editor",{'kkk':'lllll'}],
    active: true,
  },
};

const toUpperCaseStrings = (value) =>
  typeof value === "string" ? value.toUpperCase() : value;

const result = flattenAndMap(nestedObj, toUpperCaseStrings);

console.log(result);