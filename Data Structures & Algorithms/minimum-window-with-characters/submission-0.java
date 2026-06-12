class Solution {
    public String minWindow(String s, String t) {
        int[] mapS=new int[256];
        int[] mapT=new int[256];

        for(char ch: t.toCharArray()){
            mapT[ch]++;
        }

        int right=0,left=0,minLen=Integer.MAX_VALUE,minWindow=0;
        for(;right<s.length();right++){
            mapS[s.charAt(right)]++;
            while(contains(mapS,mapT)){
                if(minLen>right-left+1){
                    minLen=right-left+1;
                    minWindow=left;
                }
                mapS[s.charAt(left++)]--;
            }
        }
        return minLen==Integer.MAX_VALUE? "":s.substring(minWindow, minWindow+minLen);
    }

    public Boolean contains(int[] mapS,int[] mapT){
        for(int i=0;i<256;i++){
            if(mapT[i]>mapS[i]){
                return false;
            }
        }
        return true;
    }
}
