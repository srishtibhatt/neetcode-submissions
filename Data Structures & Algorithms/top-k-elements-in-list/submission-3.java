class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map=new HashMap<>();
        List<Integer>[] bucket=new List[nums.length+1];

        for(int num:nums){
            map.put(num,map.getOrDefault(num,0)+1); 
        }

        for(int key:map.keySet()){
            int freq=map.get(key);
            if(bucket[freq]==null){
                bucket[freq]=new ArrayList<>();
            }
            bucket[freq].add(key);
        }

        int idx=0;
        int[] res=new int[k];
        for(int i=bucket.length-1;i>=0 && idx<k;i--){
            if(bucket[i]!=null){
                for(int n:bucket[i]){
                    res[idx++]=n;
                }
            }
        }
        return res;
}
}
