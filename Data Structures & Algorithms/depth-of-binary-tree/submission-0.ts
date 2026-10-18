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
        console.log("-------------");
        const dfs = (node: TreeNode) => {
            if (node === null) {
                return 0;
            }

            const num1 = dfs(node.right);
            const num2 = dfs(node.left);
            return 1 + Math.max(num1, num2)
        };
        return dfs(root);
    }
}
