class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let ptr1=0;
        let ptr2=numbers.length-1;
        while(ptr1<ptr2){
            if(numbers[ptr1]+numbers[ptr2]===target){
                return [ptr1+1,ptr2+1];
            }else if(numbers[ptr1]+numbers[ptr2]<target){
                ptr1++;
            }else{
                ptr2--;
            }
        }
    }
}
