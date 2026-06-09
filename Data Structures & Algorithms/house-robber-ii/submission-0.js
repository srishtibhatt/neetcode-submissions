class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    robHelper(nums){
           const money=new Array(nums.length).fill(0);
            money[0]=nums[0];
            money[1]=Math.max(nums[0],nums[1]);

            for(let i=2;i<nums.length;i++){
                money[i]=Math.max(money[i-1],nums[i]+money[i-2]);
                }
            return money[nums.length-1];
    }
    rob(nums) {
        // const frstHouse = new Array(nums.length).fill(0);
        // const lastHouse = new Array(nums.length).fill(0);

        // for(let i=0;i<nums.length;i++){
        //     frstHouse[i]=nums[i];
        //     lastHouse[i]=nums[i+1]; //create two arrays with skipping last one and frst one
        // }

        // let lootSkippingLast=robHelper[lastHouse];
        // let lootSkippingFrst=robHelper[frstHouse];
        // return Math.max(lootSkippingLast,lootSkippingFrst);
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];

        return Math.max(this.robHelper(nums.slice(1)),
                        this.robHelper(nums.slice(0, -1)));
    }
}
