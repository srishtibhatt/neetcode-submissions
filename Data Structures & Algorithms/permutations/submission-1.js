class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    constructor(){
        this.res=[];
    }

    permute(nums) {
        this.backTrack(nums,0);
        return this.res;
    }

    backTrack(nums,idx){
        if(idx===nums.length){
            this.res.push([...nums]);
            return;
        }
        
        for(let i=idx; i <nums.length;i++){
          
            [nums[i],nums[idx]]=[nums[idx],nums[i]];
            this.backTrack(nums,idx+1);
            [nums[i],nums[idx]]=[nums[idx],nums[i]];
    
            }
        
        }
}
