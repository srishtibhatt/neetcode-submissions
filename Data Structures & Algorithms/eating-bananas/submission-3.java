class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int min=1;
        int max=0;
        
        for(int pile:piles){
            max=Math.max(max,pile);
        }
        int res=max;
        while(min<=max){
            int mid=(max+min)/2;
            int totalTime=0;
            for(int p : piles){
                totalTime+=Math.ceil((double) p / mid);
            }
            if(totalTime<=h){
                res=mid;
                max=mid-1;
            }else{
                min=mid+1;
            }
        }
        return res;
    }
}
