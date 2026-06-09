class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    
    partition(s) {
        const ans=[];
        const partition=[];
        this.backTrack(s,ans,partition);
        return ans;
    }
    
    backTrack(s, ans, partition){
        if(s.length===0){
            ans.push([...partition]);
            return;
        }

        for(let i=0;i<s.length;i++){
            
            let part=s.substring(0, i+1);
            if(this.isPalindrome(part)){
                partition.push(part);
                this.backTrack(s.substring(i+1),ans,partition);
                partition.pop();
            }
        }
    }
    isPalindrome(p){
    // Reverse the string and compare it with the original
        return p === p.split('').reverse().join('');
    }

}
