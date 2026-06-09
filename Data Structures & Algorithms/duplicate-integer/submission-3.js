class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let newSet= new Set(nums);
        if(newSet.size <nums.length){
            return true;
        } 
        return false;
    }
}
