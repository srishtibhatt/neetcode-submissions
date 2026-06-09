class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {

        const LIS = Array(text1.length + 1).fill().
                    map(()=>Array(text2.length + 1).fill(0));

        for(let i=1;i<=text1.length;i++){
            for(let j=1;j<=text2.length;j++){
                if(text1[i-1]===text2[j-1]){
                    LIS[i][j]= 1+LIS[i-1][j-1];
                }else{
                    LIS[i][j]=Math.max(LIS[i-1][j],LIS[i][j-1]);
                }
            }
        }
        return LIS[text1.length][text2.length];
        
    }
}
