function deepEqual(obj1, obj2) {

  if(typeof obj1 !=='object'&& typeof obj2!=='object'){

    if(obj1!==obj2) return false
  }
    if (obj1 == obj2) return true

 let b = Object.keys(obj1)
     let c = Object.keys(obj2)
    if(b.length!==c.length){
        
         
        return false
    }

   

     for(const v  in obj1){
         
      let k = deepEqual(obj1[v],obj2[v])
      if(!k) return false
         

     }


    
   return true
    
}

const objA = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "gaming"],
  address: {
    city: "Wonderland",
    zip: 12345,
  },
};

const objB = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "gaming"],
  address: {
    city: "Wonderland",
    zip: 12345,
  },
};



console.log(deepEqual(objA, objB)); // true
