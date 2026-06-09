class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let fast=0;
        let slow=0;
        while(true){
            slow=nums[slow];
            fast=nums[nums[fast]];
            if(slow===fast) break;
        }

        slow=0;
        while(slow!==fast){
            slow=nums[slow];
            fast=nums[fast]
        }
        return slow; //returning the first element where loop is detected 
    }
}
