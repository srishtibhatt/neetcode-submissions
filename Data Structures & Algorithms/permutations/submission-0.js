class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const arr= new Array(nums.length).fill(false);
        const res=[];
        this.backTrack(nums, [], 0,res);
        return res;
    }

     backTrack(nums,perm,arr,res){
        if(perm.length===nums.length){
            res.push([...perm]);
            return;
        }
        
        for(let i=0; i <nums.length;i++){
            if(!(arr & 1<<i)){
                // if(arr.has(i)){
                    perm.push(nums[i]);

                    this.backTrack(nums,perm, arr|(1<<i),res);
                    perm.pop();
        }
            }
        
        }
}
