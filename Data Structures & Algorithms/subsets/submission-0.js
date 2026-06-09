class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res=[];
        const subset = [];
        this.backTrack(nums,0,subset,res);
        return res;
    }

    backTrack(nums, i, subset, res){
        if(i>=nums.length){
            res.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        this.backTrack(nums,i+1,subset,res);
        subset.pop();
        this.backTrack(nums,i+1, subset, res);
    }
}
