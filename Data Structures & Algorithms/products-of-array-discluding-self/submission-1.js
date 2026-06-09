class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
     productExceptSelf(nums) {
        const n = nums.length;
        const output1 = new Array(n);
        const output2 = new Array(n);
        const res = new Array(n);
        
        // nums= [1,2,4,6]
        output1[0]=1;//[1,,,]
        output2[n-1]=1;//[,,,1]

        //product to the left of each element
        for(let i=1; i<n; i++){
            output1[i]=output1[i-1]*nums[i-1];
        }
        //product to the right of each element
        for(let i=n-2;i>=0;i--){
            output2[i]=output2[i+1]*nums[i+1];
        }
        for(let i=0;i<n;i++){
           res[i]=output1[i] * output2[i]; 
        }
        return res;
        }
}
