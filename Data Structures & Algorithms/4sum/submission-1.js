class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        const res=[];
        nums.sort((a,b)=>a-b)
        for(let i=0;i<nums.length;i++){
            if(i>0 && nums[i]===nums[i-1]) continue;
            for(let j=i+1;j<nums.length;j++){
                if(j>i+1 && nums[j]===nums[j-1]) continue;
                let p=j+1;
                let q=nums.length-1;
                while(p<q){
                    if(nums[i]+nums[j]+nums[p]+nums[q]===target){
                        res.push([nums[i],nums[j],nums[p],nums[q]]);
                        p++;
                        q--;
                        while(p<q && nums[p]===nums[p-1]) p++;
                        while(p<q && nums[q]===nums[q+1]) q--;
                    }else if(nums[i]+nums[j]+nums[p]+nums[q]>target){
                        q--;
                    }else if(nums[i]+nums[j]+nums[p]+nums[q]<target){
                        p++;
                    }
                }
            }
        }
        return res;
    }
}
