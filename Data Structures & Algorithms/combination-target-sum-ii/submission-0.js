class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        this.res=[];
        candidates.sort((a,b)=>a-b);
        this.backTracking(candidates,target, 0,0,[]);
        return this.res;
    }
    backTracking(candidates,target, i,total,curr){
        if(total===target) {
            this.res.push([...curr]);
            return;
        }
        if(total>target || i=== candidates.length){
            return;
        }

        curr.push(candidates[i]);
        this.backTracking(candidates,target, i+1,total+candidates[i],curr);
        curr.pop();
        while(i+1<candidates.length && candidates[i]===candidates[i+1]){
            i++;
        }
        this.backTracking(candidates,target, i+1,total,curr);
    }
}
