class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums){
        let count=0;
        const newMap=new Map();
        for(let num of nums){
            count=(newMap.get(num)||0)+1;
            newMap.set(num,count);
        if(count>nums.length/2){
            return num;
        }
        }
    }
}
