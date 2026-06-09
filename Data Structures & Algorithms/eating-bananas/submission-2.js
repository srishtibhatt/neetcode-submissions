class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min= 1;
        let max= Math.max(...piles);
        let res=max;

            while(min<=max){
                const mid= Math.floor((min+max)/2);

                let totalTime=0;
                for(const p of piles){
                    totalTime+=Math.ceil(p/mid);
                }
                if(totalTime<=h) 
                {res=mid ;
                 max=mid-1;}
                else min=mid+1;
            }
            return res;
        
    }
}
