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
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> level=new ArrayList<>();
        Queue<TreeNode> treeQueue=new LinkedList<>();
        treeQueue.add(root);

        while(!treeQueue.isEmpty()){
            List<Integer> currlevel=new ArrayList<>();

            for(int i=treeQueue.size();i>0;i--){
                TreeNode node=treeQueue.poll();
                if(node!=null){
                    currlevel.add(node.val);
                    treeQueue.add(node.left);
                    treeQueue.add(node.right);
                    }
                }
                if(currlevel.size()>0){
                    level.add(currlevel);
                }
            }
        return level;
        }
    }

