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
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> result=new ArrayList<>();
        Queue<TreeNode> queue=new LinkedList<>();

        queue.offer(root);

        while(!queue.isEmpty()){
            TreeNode lastVal=null;
            int levelSize=queue.size();

            for(int i=0;i<levelSize;i++){
                TreeNode node=queue.poll();
                if(node!=null){
                    lastVal=node;
                    queue.offer(node.left);
                    queue.offer(node.right);
                }
            }
        if(lastVal!=null){
            result.add(lastVal.val);
            }
        }
    return result;
    }
}
