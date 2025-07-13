function deepFreeze(obj) {


    Object.freeze(obj)
    for(const v in obj){
          
      if(typeof obj[v]=='object'){

        deepFreeze(obj[v])
      }

    }
}
const data = {
  user: "Alice",
  stats: {
    score: 100,
    achievements: ["gold", "silver"],
  },
};

deepFreeze(data);
console.log(data);


data.user = "Bob";
data.stats.score = 200; 
 data.stats.achievements.push("bronze"); 

console.log(data);