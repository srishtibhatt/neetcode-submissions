class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    constructor() {
        this.res = new Set();
    }

    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        this.backTrack([], nums,0);
        return Array.from(this.res).map(target => JSON.parse(target));
    }

    backTrack(target,nums,i){
        if (i === nums.length) {
            this.res.add(JSON.stringify(target));
            return;
        }
        target.push(nums[i]);
        //include each i+1 step
        this.backTrack(target,nums,i+1);
        //before backtracking , pop out the last inserted element , and then call the "not include" recursion 
        target.pop(); //backtracking step
        this.backTrack(target,nums,i+1);

    }
}
