class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows=Array(9).fill(null).map(()=>new Set());
        const cols=Array(9).fill(null).map(()=>new Set());
        const grids=Array(9).fill(null).map(()=>new Set());

        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                const num=board[i][j];
                if(num==='.'){
                    continue;
                }

                if(rows[i].has(num))
                return false;
                rows[i].add(num);

                if(cols[j].has(num))
                return false;
                cols[j].add(num);

                const gridIndex=Math.floor(i/3)*3 + Math.floor(j/3);
                if(grids[gridIndex].has(num))
                return false;
                grids[gridIndex].add(num);
        }
    }
    return true;
}
}