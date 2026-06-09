class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        //count the frequency of number
        for(const num of nums){
                freqMap.set(num,(freqMap.get(num)|| 0)+1);
            }

            //convert the key value pair in array and sort it in descending order 
            const sortedEntries = Array.from(freqMap.entries()).sort((a,b) => b[1]-a[1]);

            //get the first entry value
            return sortedEntries.slice(0,k).map(entry=>entry[0]);
    }
}
