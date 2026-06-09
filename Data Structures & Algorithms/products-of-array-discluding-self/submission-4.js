class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let multiple=1;
        let zeroCnt=0;
        const arr=new Array(nums.length);
        for(let i=0;i<nums.length;i++){
            if(nums[i]!==0){
                multiple*=nums[i];
            }else{
                zeroCnt++;
            }
        }
        if(zeroCnt>1){
            return Array(nums.length).fill(0);
        }
        for(let j=0;j<nums.length;j++){
            if(zeroCnt > 0){
                arr[j]=nums[j]===0?multiple:0;
            }else{
                arr[j]=(multiple/nums[j]);
            }
        }
        return arr;
    }
}
