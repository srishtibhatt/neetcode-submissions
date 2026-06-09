class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        const ROWS = matrix.length
        const COLS= matrix[0].length;
            
            let low=0;
            let high=ROWS-1;
            while(low<=high){
                let mid=Math.floor((high+low)/2);
                if (matrix[mid][COLS-1]<target) low=mid+1;
                else if(matrix[mid][0]>target) high=mid-1;
                else break;
            }

            if(!(low<=high)){
                return false;
            }
//binary search over the founded potential row
            let mid=Math.floor((high+low)/2);
            let l=0;
            let r= COLS-1;
            while(l<=r){
                let m=Math.floor((l+r)/2);

                if (matrix[mid][m]<target) l=m+1;
                else if(matrix[mid][m]>target) r=m-1;
                else return true;
            }
            return false;
    }
    
}
