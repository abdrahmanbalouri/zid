function FinalAttempt(callback, count) {
     let  m = 0
    return  async function(...arg){
  while(true){

   try{

       let p=await callback(...arg)
        if(p) return p


   }catch{

    if(m>count)

     throw Error('Final Attempt Fail')

   }
   m++







  }


    }
}
const unreliableAsyncFunction = async (param) => {
  if (Math.random() > 0.7) {
    return `Success with ${param}`;
  }
  throw new Error("Failure");
};

const finalAttempt = FinalAttempt(unreliableAsyncFunction, 3);

finalAttempt("test")
  .then((result) => console.log(result))
  .catch((err) => console.error(err));