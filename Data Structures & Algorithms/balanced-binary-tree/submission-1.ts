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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {

        const dfs = (node: TreeNode): number => {
            // If no node we are at 0
            if(node === null) return 0;

            // Get the balance
            const left = dfs(node.left);
            const right = dfs(node.right);
            // If left is not balanced, right is not balanced, or one is longer than another return -1
            if(left === -1 || right === -1 || Math.abs(left - right) > 1) {
                return -1
            }

            return 1 + Math.max(left, right)
        }

        return dfs(root) !== -1;
    }
}
