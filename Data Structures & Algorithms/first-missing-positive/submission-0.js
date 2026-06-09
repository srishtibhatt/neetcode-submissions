class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const res=[];
        for(let i=0;i<nums.length;i++){
            if(nums[i]<=0 || nums[i]>nums.length){
                nums[i]=nums.length+1;
            }
        }
        for(let i=0;i<nums.length;i++){
            let num=Math.abs(nums[i]);
            if(num>nums.length) continue;
            if(nums[num-1]>0){
                nums[num-1]=-nums[num-1];
            }
        }

        for(let i=0;i<nums.length;i++){
            if(nums[i]>0){
                return i+1;
            }
        }
        return nums.length+1;
    }
}
