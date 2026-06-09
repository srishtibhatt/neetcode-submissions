class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        const stack=[];
        for(const c of s){
            stack.push(c);
        }
        let str=0;
        while(stack.length){
            s[str++]=stack.pop();
        }
    }
}
