function insertionSortAnalyzer(arr, comparator) {
 let  l = -1
 let c =0
    for(let i =0;i<arr.length;i++){
        for(let j =i+1;j<arr.length;j++){
            c++


            if(comparator(arr[i],arr[j])>0){
               l++          
               console.log(arr[i],arr[j]);
               
                [arr[i],arr[j]]=[arr[j],arr[i]]


            }else{

                continue
            }
        }
    }

    return {arr,c,l}


}
const comparator = (a, b) => a - b;

const result = insertionSortAnalyzer([5, 2, 4, 6, 1, 3], comparator);

console.log(result);