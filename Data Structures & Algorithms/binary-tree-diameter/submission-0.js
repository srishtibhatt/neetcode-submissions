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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        const diameter =[0];
        this.height(root,diameter);
        return diameter[0];

    }
    height(root,diameter){
        if(root===null) return 0;
        const left = this.height(root.left,diameter);
        const right = this.height(root.right,diameter);
        diameter[0]= Math.max(diameter[0], left+right);
        return 1 + Math.max(left,right);
    }
}
