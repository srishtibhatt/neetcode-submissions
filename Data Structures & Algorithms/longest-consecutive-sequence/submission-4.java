class Solution {
    public int longestConsecutive(int[] nums) {
        HashMap<Integer,Boolean> map=new HashMap<>();
        int count=0;
        for(int num:nums){
            map.put(num,Boolean.FALSE);
        }

        for(int num:nums){
            int seq=1;
            int nextNum=num+1;
            while(map.containsKey(nextNum) && map.get(nextNum)==false){
                seq++;
                map.put(nextNum,Boolean.TRUE);
                nextNum++;
            }
            int prevNum=num-1;
            while(map.containsKey(prevNum)&& map.get(prevNum)==false){
                seq++;
                map.put(prevNum,Boolean.FALSE);
                prevNum--;
            }
            count=Math.max(seq,count);
        }
        return count;
    }
}
