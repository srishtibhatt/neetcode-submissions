class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
        const ps= Array(n).fill(-1);
        const ns= Array(n).fill(n);
        const s= [];

        //iterating over previous smaller elements
        for (let i=0;i<n;i++){
            while(s.length && heights[s[s.length-1]] >=heights[i]){
                s.pop();
            }
        if(s.length){
            ps[i]=s[s.length-1];
            }
            s.push(i);
        }

        //iterating on next smaller elements 

        s.length=0;
         for (let i=n-1;i>=0;i--){
        while(s.length && heights[s[s.length-1]]>=heights[i]){
            s.pop();
        }
        if(s.length){
            ns[i]=s[s.length-1];
        }
        s.push(i);
        }
    
        let maxArea=0;
        for(let i=0;i<n;i++){
            let curr = (ns[i]-ps[i]-1) * heights[i];
            maxArea= Math.max(maxArea,curr);
        }
        return maxArea;
    }
}
