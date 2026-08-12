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
    public int maxDepth(TreeNode root) {
        Queue<TreeNode> q=new LinkedList<>();
        if(root!=null) q.add(root);
        int level= 0;
        while(true){
            int nodeAtCountLvl=q.size();
            if(nodeAtCountLvl==0){
                return level;
            }
            while(nodeAtCountLvl>0){
                TreeNode element=q.poll();
                if(element.right!=null){
                    q.add(element.right);
                }
                if(element.left!=null){
                    q.add(element.left);
                }
                nodeAtCountLvl--; 
            }
            level++;
        }
    }
}
