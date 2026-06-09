class Solution {
    generateParenthesis(n) {
        const res=[];
        this.backTrack(n,0,0,'',res);
        return res;
    }
    
    backTrack(n,openN,closeN,currString,res) {
                if(currString.length===2*n){
                res.push(currString);
                return;
            }
    
            if(openN<n){
                this.backTrack(n,openN+1,closeN,currString+'(',res);
            }

            if(closeN<openN){
                this.backTrack(n,openN,closeN+1,currString +')',res);
            }
    }
    
}

