class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int ptr1=0;
        int ptr2=numbers.length-1;
        while(ptr1<ptr2){
                int k=numbers[ptr1]+numbers[ptr2];
                if(target>k){
                    ptr1++;
                }else if(target<k){
                    ptr2--;
                }else{
                    return new int[]{ptr1+1,ptr2+1};
                }
        }
        return new int[0];
    }
}
