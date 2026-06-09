/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        // if (root === null) return null;

        // const node = new TreeNode(root.val);

        // node.right= this.invertTree(root.left);
        // node.left= this.invertTree(root.right);

        // return node;
        if(root== null) return null;
        const queue = new Queue([root]);
        while(!queue.isEmpty()){
            let node=queue.pop();

            //swapping the child node 
            let temp=(node.left);
            node.left=node.right;
            node.right=temp;

            if(node.left!==null) queue.push(node.left);
            if(node.right!==null) queue.push(node.right);
        }
        return root;

    }
}
