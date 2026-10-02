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
    public int maxPathSum(TreeNode root) {
        int[] res=new int[]{root.val};
        getMax(root,res);
        return res[0];
    }
    private int getMax(TreeNode node,int[] ans){
        if(node==null) return 0;
        int left=Math.max(0,getMax(node.left,ans));
        int right=Math.max(0,getMax(node.right,ans));
        ans[0] = Math.max(ans[0],node.val+left+right);
        return node.val+Math.max(left,right);
    }
}
