class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
    
    if(grid.length===0) return 0;
    
    let row = grid.length;
    let cols= grid[0].length;
    let count= 0;

    function dfs(r,c){
        if(r<0 || r>=row || c<0 || c>=cols || grid[r][c]==='0'){
            return;
        }

        //mark the visited one as 0 or else can create a new visited arr.
        grid[r][c]='0';

        //perform dfs for all the neighours associate with that index
        dfs(r+1,c);
        dfs(r-1,c);
        dfs(r,c+1);
        dfs(r,c-1);
    }

        for(let i=0;i<row;i++){
            for(let j =0;j<cols;j++){
                if(grid[i][j]==='1'){
                    count++;
                    dfs(i,j);
                }
            }
        }
        return count;
    }
}
