class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSets=new Set(nums);
        let longestStreak=0;

        for(let num of nums){
            if(!numSets.has(num-1)){
                let currNum=num;
                let currStreak=1;

                while(numSets.has(currNum+1)){
                    currNum++;
                    currStreak++;
                }
                longestStreak=Math.max(longestStreak,currStreak);
            }
        }
        return longestStreak;
    }
}
