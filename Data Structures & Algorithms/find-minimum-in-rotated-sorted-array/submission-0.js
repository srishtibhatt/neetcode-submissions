class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l=0;
        let r=nums.length -1;
        let res=nums[0];

        while(l<r){
            const mid= Math.floor((l+r)/2);
            if(nums[mid]>nums[r]) l=mid+1;
            else r=mid;
        }
            return nums[l];
        
    }
}
