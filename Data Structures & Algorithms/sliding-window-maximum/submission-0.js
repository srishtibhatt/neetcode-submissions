class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        // [1  2  1] 0  4  2  6
        const n = nums.length;
        const output = new Array(n-k+1);//output would of size 5 for k=3 as the last 2 digits cannot form a window 
        const q = new Deque();
        let r=0;
        let l=0;
        while(r<n){
        //remove the previous element which are smaller than the new upcoming one
            while(q.size() && nums[r]>nums[q.back()]){
                q.popBack();
            }
                q.pushBack(r);
    //removing front element if its already pushed to the output array 
    //using l index , left should never be greater , so if its found then pop it out of the queue
            if(l>q.front()){
                q.popFront();
            }

            if((r+1)>=k){
                output[l]=nums[q.front()];
                l++;
            }
            r++;
        }

        return output;
    }
}
