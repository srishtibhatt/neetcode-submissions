class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) { 
  //  binary search
        let len= nums.length-1;
        let r=0;
        while(r<=len){
           const m = Math.floor((r+len)/2);
           if(nums[m]>target){
            len=m-1;
           }
           else if(nums[m]<target){
            r=m+1;
           }else {return m;}
        }
        return -1;
    }
}
