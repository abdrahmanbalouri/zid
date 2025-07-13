function isSnakePath(grid) {
        let c =0
       let  total = 0
    function count(i = 0, j = 0) {
        if (i >= grid.length) return;
        if (j >= grid[0].length) return count(i + 1, 0);
        if (grid[i][j] === 1) total++;
        return count(i, j + 1);
    }
    count()
     
     
    function kk (i=0,y=0){
        if(y>= grid.length){
            return  kk(i+1,y=0)
        }
        if(i>=grid.length){
            
            return true
        } 

        if(grid[i][y]==1){
                c++
            let b = 0
             if(y+1<grid.length&&grid[i][y+1]==1)b++
              if(y-1>=0&&grid[i][y-1]==1)b++
             if(i+1<grid.length &&grid[i+1][y]==1)b++
             if(i-1>=0 && grid[i-1][y]==1)b++
                    console.log(b);
                    
            if((c ==1||c== total)  && b<1) return false
            
            if((c>1&& c!=total) && b<2 ) return false
    }
          return kk(i ,y+1)


    }
let b= kk()

return b

}

const grid3 = [
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
]
console.log(isSnakePath(grid3));



