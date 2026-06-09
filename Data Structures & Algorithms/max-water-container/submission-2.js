class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let ptr1=0;
        let ptr2=heights.length-1;
        let maxWater=0;
        while(ptr1<ptr2){
            let area=Math.min(heights[ptr1],heights[ptr2])*(ptr2-ptr1);
            maxWater=Math.max(maxWater,area);
           
            if(heights[ptr2]<heights[ptr1]){
                ptr2--;
            }else{
                ptr1++;
            }
        }
        return maxWater;
    }
}
