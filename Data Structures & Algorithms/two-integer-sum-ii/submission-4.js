class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // const mp=new Map();
        // for(let i=0;i<=numbers.length;i++){
        //     let temp=target-numbers[i];
        //     if(mp.has(temp)){
        //         return [mp.get(temp),i+1];
        //     }
        //     mp.set(numbers[i],i+1);
        // }
        // return [];
        let l=0;
        let r=numbers.length-1;
        while(l<r){
            const currsum=numbers[l]+numbers[r];
            if(currsum<target){
                l++;
            }else if(currsum>target){
                r--;
            }else{
                return [l+1,r+1];
            }
        }
        return [];
    }
}
