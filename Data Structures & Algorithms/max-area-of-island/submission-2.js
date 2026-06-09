class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        if(grid.length===0) return 0 ;

        let rows = grid.length;
        let cols = grid[0].length;
        const directions= [[1,0],[-1,0],[0,1],[0,-1]];
        let maxArea=0;

        const dfs=(r,c)=>{

            if(r<0 || r>=rows || c<0 || c>=cols || grid[r][c]===0){
                return 0;
            }

            grid[r][c]=0;

            let area =1; //initialize the area with one 
            for(const [dr,dc] of directions){
                area+= dfs(r+dr,c+dc);
            }
            // area+=dfs(r+1,c);
            // area+=dfs(r-1,c);
            // area+=dfs(r,c+1);
            // area+=dfs(r,c-1);
            return area;
        }
        
        for(let i =0;i<rows;i++){
            for(let j=0;j<cols;j++){
                if(grid[i][j]===1){
                    //storing the above returned area and compare with maxArea
                    maxArea = Math.max(dfs(i,j), maxArea);
                }
            }
        }
            
        return maxArea;
    }
}
