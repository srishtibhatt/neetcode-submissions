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
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        Map<Integer,Integer> mp=new HashMap<>();
        
        for(int i=0;i<inorder.length;i++){
            mp.put(inorder[i],i);
        }
        return splitTree(preorder, mp, 0,0,inorder.length-1);
    }
    private TreeNode splitTree(int[] preOrder,Map<Integer,Integer> mp,int rootidx,int left,int right){
        TreeNode root=new TreeNode(preOrder[rootidx]);
        int mid= mp.get(preOrder[rootidx]);
        if(mid>left){
            root.left=splitTree(preOrder,mp,rootidx+1,left,mid-1);
        }
        if(mid<right){
            root.right=splitTree(preOrder,mp,rootidx+mid-left+1,mid+1,right);
        }
        return root;
    }
}
