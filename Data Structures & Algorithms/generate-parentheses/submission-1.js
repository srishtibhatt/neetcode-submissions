class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res=[];
        this.backtrack(n,0,0,'',res);
        return res;
    }

    backtrack(n,openN,closeN,currString,res){
        if(currString.length === 2*n){
            res.push(currString);
            return;
        }
        if(openN<n){
            this.backtrack(n,openN+1,closeN,currString+'(',res);
        }
        if(closeN<openN){
            this.backtrack(n,openN,closeN+1,currString+')',res);
        }
    }
}
