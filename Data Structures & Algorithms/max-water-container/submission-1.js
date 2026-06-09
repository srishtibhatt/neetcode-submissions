class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left=0;
        let right=heights.length-1;
        let maxArea=0;
        while(left<right){
            let area=Math.min(heights[left],heights[right])*(right-left);
            maxArea=Math.max(maxArea,area);
            if(heights[right]< heights[left]){
                right--;
            }else{
                left++;
            }
        }
        return maxArea;
    }
}
