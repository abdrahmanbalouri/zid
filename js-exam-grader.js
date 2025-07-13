async function examGrader(timeout, exercises) {

    let b =0
    let t =0

    for(const i of exercises){



        let g =  await i()
          t +=g.time


          if(t>=timeout){

            break
          }

          b+=g.note
    }

    return b
}

const exercises = [
  () =>
    new Promise((res) => setTimeout(() => res({ time: 1000, note: 15 }), 1000)),
  () =>
    new Promise((res) => setTimeout(() => res({ time: 2000, note: 18 }), 2000)),
  () =>
    new Promise((res) => setTimeout(() => res({ time: 500, note: 12 }), 500)),
];

examGrader(3000, exercises).then((finalGrade) => {
  console.log(`Final Grade: ${finalGrade}`);
});

examGrader(4000, exercises).then((finalGrade) => {
  console.log(`Final Grade: ${finalGrade}`);
});