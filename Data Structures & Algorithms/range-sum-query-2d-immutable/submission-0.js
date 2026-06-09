class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        let m=matrix.length;
        if(m===0){
            this.prefix=[];
            return;
        }
        let n=matrix[0].length;
        this.prefix=Array.from({length:m},()=>Array(n).fill(0));
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                let top=(i>0)?this.prefix[i-1][j]:0;
                let left=(j>0)?this.prefix[i][j-1]:0;
                let topleft=(i>0 && j>0)?this.prefix[i-1][j-1]:0;
                this.prefix[i][j]=matrix[i][j]+top+left-topleft;
                }
            }
        
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        if(!this.prefix.length) return 0;
        let total=this.prefix[row2][col2];
        let top=row1>0? this.prefix[row1-1][col2]:0;
        let left=col1>0 ? this.prefix[row2][col1-1]:0;
        let topleft=(row1>0 && col1>0) ? this.prefix[row1-1][col1-1]:0;

        return total-top-left+topleft;
    }
}
