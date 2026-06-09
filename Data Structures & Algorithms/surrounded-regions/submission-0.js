class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        if (board.length === 0 || board[0].length === 0) return;
        const m =board.length;
        const n =board[0].length;
        const directions = [[1,0],[-1,0],[0,1],[0,-1]];

        function dfs(x,y){
            if(x<0 || x>=m || y<0 || y>=n || board[x][y]!=='O') return;

            board[x][y]='S' //marks it as safe 

            for(const [dx,dy] of directions){
                dfs(x+dx,y+dy);
            }
        }

        //start dfs from the border cell 
        for(let i=0;i<m;i++){
            //frst and last column
            dfs(i,0);
            dfs(i,n-1);
        }
        for(let j=0;j<n;j++){
            //frst and last row
            dfs(0,j);
            dfs(m-1,j);
        }
        for(let i=0;i<m;i++){
            for(let j =0;j<n;j++){
                if(board[i][j]==='O')
                    board[i][j]='X';
                else if(board[i][j]==='S')
                    board[i][j]='O';
            }
        }

    }
}
