class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n=nums.length;
        const output1=new Array(n);
        const output2=new Array(n);
        const res=new Array(n);
        output1[0]=1;
        output2[n-1]=1;
        for(let i=1;i<n;i++){
            output1[i]=nums[i-1]*output1[i-1];
        }
        for(let j=n-2;j>=0;j--){
            output2[j]=nums[j+1]*output2[j+1];
        }
        for(let k=0;k<n;k++){
            res[k]=output1[k]*output2[k];
        }
        return res;
    }

}
