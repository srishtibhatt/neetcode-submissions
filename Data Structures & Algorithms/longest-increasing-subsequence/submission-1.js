class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
    */
    lengthOfLIS(nums) {

        const LIS = new Array(nums.length).fill(1);

        for(let i=1;i<nums.length;i++){
            for(let j=0;j<i;j++){
                if(nums[i]>nums[j]){
                    if(LIS[j]+1>LIS[i]){
                        LIS[i]=LIS[j]+1;
                    }
                }
            }
        }
        let maxIdx=0;
        for(let i=0;i<LIS.length;i++){
            if(LIS[i]>LIS[maxIdx]){
                maxIdx=i;
            }
        }
        // return Math.max(...LIS);
        return LIS[maxIdx];
    }
}
