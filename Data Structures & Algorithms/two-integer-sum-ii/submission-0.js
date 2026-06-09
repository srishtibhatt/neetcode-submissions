class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let len = numbers.length;
        // for(let i =0;i<len;i++){
        //     numbers[i]
        // }
        const map = new Map();
        for(let i =0;i<len;i++){
           const x=target- numbers[i];
           if(map.has(x)){
            return [map.get(x),i+1];
           }
           map.set(numbers[i], i+1);
        }
           return[];
    }
}
