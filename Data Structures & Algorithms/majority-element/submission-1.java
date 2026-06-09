class Solution {
    public int majorityElement(int[] nums) {
        int res=0;
        int maxCount=0;
        HashMap<Integer,Integer> map=new HashMap<>();
        for(int num:nums){
            map.put(num,map.getOrDefault(num,0)+1);
            if(map.get(num)>maxCount){
                res=num;
                maxCount=map.get(num);
            }
        }
        return res;
    }
}