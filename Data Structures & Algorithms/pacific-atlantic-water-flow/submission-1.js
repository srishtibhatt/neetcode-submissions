class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        if(heights.length===0 || heights[0].length===0) return [];

        const m =heights.length;
        const n = heights[0].length;
        const directions= [[1,0],[-1,0],[0,1],[0,-1]];

        const pacific=Array.from({length:m},()=>Array(n).fill(false));
        const atlantic= Array.from({length:m},()=>Array(n).fill(false));

        function dfs(x,y,ocean,prevHeight){
            if(x < 0 || y < 0 || x >= m || y >= n || heights[x][y]<prevHeight || ocean[x][y]){
                return;
            }
            ocean[x][y]=true;
            for(const [dr,dc] of directions){
                dfs(x+dr,y+dc,ocean,heights[x][y]);
            }
        }

        for(let i=0;i<m;i++){
            dfs(i,0,pacific,heights[i][0]); //left side
            dfs(i,n-1,atlantic,heights[i][n-1]); //right side
        }

        for(let j=0;j<n;j++){
            dfs(0,j,pacific,heights[0][j]);//top
            dfs(m-1,j,atlantic,heights[m-1][j])//bottom
        }

        //find all the cells that can flow to both oceans
        const result=[];
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(pacific[i][j] && atlantic[i][j]){
                    result.push([i,j]);
                }
            }
        }
        return result;
    }
}
