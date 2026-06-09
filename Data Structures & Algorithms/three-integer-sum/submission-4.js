class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        const arr = nums.sort((a,b)=>a-b);
        const res= [];
        const len = nums.length;

        //len-2 =because we need triplets- and last two digit combine third last digit will from triplet 
        //[-4,-1,-1,0,1,2]
        for(let i=0;i<len-2;i++){
            // if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) {continue;}

            let left=i+1;
            let right=len-1;
            while(left<right){
                const sum= nums[i]+nums[left]+nums[right];
                if(sum===0){
                    res.push([nums[i],nums[left],nums[right]]);
                    //skip duplicates
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                }
                else if(sum<0) left++;
                else right--;
            }
        }
        return res;
    }
}
