function gridWordFinder2(grid, word) {

      let b = grid.length

    function kk(x =0, y = 0){
        if(x>=b)return false
        if(y>=b) return kk(x+1,0)

        


        if(aurizontal(x,y,grid,word))return {x,y,'hero':'hero'}
        
        if(vertical(x,y,grid,word))return {x,y, 'hero':'vero'}

        return kk(x,y+1)


    }


  let c =kk()
  return c
}

function aurizontal(x,y,grid,word,i=0){
    if(  i==word.length)return true
    if( y>=grid.length ) return false
    if(grid[x][y]!==word[i])return false

    return aurizontal(x,y+1,grid,word,i+1)


}
function vertical(x,y,grid,word,i=0){
    if(  i==word.length)return true
    if(y >= grid.length) return false
    if(grid[x][y]!==word[i])return false

    return vertical(x+1,y,grid,word,i+1)


}


const grid = [
  ["c", "a", "t"],
  ["d", "o", "g"],
  ["r", "a", "t"],
];

console.log(gridWordFinder2(grid, "cdr"));