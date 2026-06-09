class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const numSet = new Set(nums);
        let longestStreak =0;

        for(let num of nums){
            if(!numSet.has(num-1)){
                let currentNum=num;
                let currentStreak=1;
    
            while(numSet.has(currentNum+1)){
                currentNum++;
                currentStreak++;
                }
            longestStreak = Math.max(longestStreak, currentStreak);
            }
        }
        return longestStreak;
    //     nums.sort((a,b)=>a-b);
    //     //[2,3,4,4,5,10,20]
    //     let longestStreak =1;
    //     let currentStreak=1;
    //     //check for the corresponding digit , whether its consecutive or not ?
    //     for(let i =1;i<nums.length;i++){
    //         if (nums[i] === nums[i - 1] + 1) {
    //             currentStreak++;
    //         } 
    //         else(nums[i]!==nums[i-1])
    //         {
    //             currentStreak=1;
    //         }
    //     longestStreak = Math.max(longestStreak, currentStreak);
    //     }
    // return longestStreak;
    }
}