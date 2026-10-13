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

public class Codec {

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        if(root==null) return "null";
        Queue <TreeNode> q=new LinkedList<>();
        StringBuilder sb=new StringBuilder();
        q.add(root);

        while(!q.isEmpty()){
        TreeNode node=q.poll();
        
            if(node==null) {
                sb.append("n,");
            }
            else{
                sb.append(node.val).append(",");
                q.add(node.left);
                q.add(node.right);
            }
        }
        return sb.toString();
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        if (data.equals("null")) return null;
        String[] parts=data.split(",");

        TreeNode root = new TreeNode(Integer.parseInt(parts[0]));

        Queue <TreeNode> q=new LinkedList<>();
        q.add(root);
        int i=1;

        while(!q.isEmpty() && i < parts.length){
            TreeNode parent=q.poll();

            //left child
            if(i < parts.length  && !parts[i].equals("n")){
                parent.left= new TreeNode(Integer.parseInt(parts[i]));
                q.add(parent.left);
            }
            i++;

            //right child
            if(i < parts.length && !parts[i].equals("n")){
                parent.right=new TreeNode(Integer.parseInt(parts[i]));
                q.add(parent.right);
            }
            i++;
        }
        return root;
    }
}
