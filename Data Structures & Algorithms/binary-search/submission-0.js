class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const s=[];
        for(let i=0;i<nums.length;i++){
            if(nums[i]===target){
                return i;
            }
            s.push(i);
        }
        return -1;
    }
}
