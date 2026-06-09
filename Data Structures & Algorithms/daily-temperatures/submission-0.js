class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n= temperatures.length;
        const resArr= new Array(temperatures.length).fill(0); ;
        const stack=[];
        for(let i =0;i<n;i++){
            
            while
            (stack.length>0 &&temperatures[stack[stack.length-1]]<temperatures[i]){
                const index=stack.pop();
                resArr[index]=i-index;
            }
            stack.push(i);
        }
        return resArr;
    }
}
