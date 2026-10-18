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
    maxDepth(root: TreeNode | null): number {

        const dfs = (node: TreeNode) => {
            // If null the count is 0
            if (node === null) {
                return 0;
            }
            const num1 = dfs(node.left);
            const num2 = dfs(node.right);
            return Math.max(num1, num2) + 1;
        }
        return dfs(root)
    }
}
