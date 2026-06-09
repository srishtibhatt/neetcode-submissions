class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int[] s1Count=new int[26];
        int[] s2Count=new int[26];
        if(s1.length()>s2.length()){
            return false;
        }
        for(int i=0;i<s1.length();i++){
            s1Count[s1.charAt(i)-'a']++;
        }

        int widSize=s1.length();
        for(int i=0;i<s2.length();i++){
            s2Count[s2.charAt(i)-'a']++;
            if(i>=widSize){
                s2Count[s2.charAt(i-widSize)-'a']--;
            }
            if(isSame(s1Count,s2Count)){
                return true;
            }
        }
        return false;
    }
    public boolean isSame(int[] s1,int[] s2){
        for(int i=0;i<26;i++){
            if(s1[i]!=s2[i]){
                return false;
            }
        }
        return true;
    }
}
