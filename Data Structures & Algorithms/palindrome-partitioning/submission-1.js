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
            
            //take a new string part and store the partitioned value in it and check if its palindrom
            let part=s.substring(0, i+1);
            if(this.isPalindrome(part)){
                //push the frst palindrom part and go on with the recursion call
                partition.push(part); 
                this.backTrack(s.substring(i+1),ans,partition);
                partition.pop(); //backtracking step , removing up the last pushed alphabet , and starting the new function with new string
            }
        }
    }
    isPalindrome(p){
    // Reverse the string and compare it with the original
        return p === p.split('').reverse().join('');
    }

}
