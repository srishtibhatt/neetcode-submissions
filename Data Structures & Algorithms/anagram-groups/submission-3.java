class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map=new HashMap<>();
        for(String str: strs){
            int[] count=new int[26];
            for(char s: str.toCharArray()){
                count[s - 'a']++;
            }
            String key=Arrays.toString(count);
            if(!map.containsKey(key)){
                map.put(key,new ArrayList<>());
            }
            map.get(key).add(str);
        }
        return new ArrayList<>(map.values());

    }
}
