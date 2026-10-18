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
    diameterOfBinaryTree(root: TreeNode | null): number {
        let max = 0;
        const dfs = (node: TreeNode) => {
            if(node === null) {
                return 0;
            }

            const leftHeight = dfs(node.left);
            const rightHeight = dfs(node.right);
            console.log(leftHeight, rightHeight)
            max = Math.max(max, leftHeight + rightHeight);
            return Math.max(leftHeight, rightHeight) + 1;

        }
        dfs(root);
        return max;
    }
}
