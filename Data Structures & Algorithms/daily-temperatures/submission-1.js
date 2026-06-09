class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n=temperatures.length;
        const res=new Array(n).fill(0);
        let stack=[];
        for(let i=0;i<temperatures.length;i++){
            while(stack.length>0 && temperatures[stack[stack.length-1]]<temperatures[i]){
                const idx=stack.pop();
                res[idx]=i-idx;
            }
            stack.push(i);
        }
        return res;
    }
}
