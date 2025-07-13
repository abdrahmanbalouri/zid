function deeCplone(obj) {
    if(typeof obj !=='object') return obj

     let k = {}
    for(const v in obj){

        if(Array.isArray(obj[v])){
            
             
            k[v] =[...obj[v]]
            continue

        }
          
    k[v]= deeCplone(obj[v])

    }

    return k
}

const original = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "gaming",['jjjj']],
  address: {
    city: "Wonderland",
    zip: 12345,
  },
};

const cloned = deeCplone(original); 
console.log(cloned);


cloned.name = "Bob";
 cloned.hobbies[2].push("chess");
cloned.address.city = "Nowhere";

console.log(cloned);