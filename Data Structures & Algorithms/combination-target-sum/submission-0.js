class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res=[];
        let curr=[];
        this.backtrack(res,curr, 0, nums, target);
        return res;
    }
    backtrack(res,curr, i, nums, target){
        if(target===0){
            res.push([...curr]);
        }else if(target<0 || i>=nums.length){
            return;
        }else{
            curr.push(nums[i]);
            this.backtrack(res,curr,i,nums,target-nums[i]);
            curr.pop();
            this.backtrack(res,curr,i+1,nums,target);
        }
        
    }
}
