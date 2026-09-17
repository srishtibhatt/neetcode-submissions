/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    public boolean isValidBST(TreeNode root) {
        List<Integer> arr=new ArrayList<>();
        dfs(root,arr);
        int prev=arr.get(0);
        boolean isBst=true;
        for(int i=1;i<arr.size();i++){
            if(arr.get(i)<=prev){
                isBst=false;
            }
            prev=arr.get(i);
        }
        return isBst; 
    }

    private void dfs(TreeNode node, List<Integer> arr){
        if(node==null) return;

        dfs(node.left, arr);
        arr.add(node.val);
        dfs(node.right, arr);
    }
}
