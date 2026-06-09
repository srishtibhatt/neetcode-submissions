class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        // let unique=Array.from(new Set(nums)).sort((a,b)=>a-b);
        // // for(let i=0;i<unique.length;i++){
        // //     nums[i]=unique[i];
        // // }
        // return unique.length;
        let n=nums.length;
        let l=0;
        let r=0;
        while(r<n){
            nums[l]=nums[r];
            while(r<n && nums[r]===nums[l]){
                r++;
            }
            l++;
        }
        return l;

    }
}
