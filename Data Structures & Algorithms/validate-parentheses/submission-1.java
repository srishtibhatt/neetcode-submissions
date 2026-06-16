class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack=new Stack<>();
        Map<Character,Character> map=new HashMap<>();
        map.put(')','(');
        map.put('}','{');
        map.put(']','[');
        for(char str:s.toCharArray()){
            if(map.containsKey(str)){
                if(!stack.isEmpty() && stack.peek()==map.get(str)){
                    stack.pop();
                }else{
                    return false;
                }
            }else{
                stack.push(str);
            }
        }
        return stack.isEmpty();
    }
}
