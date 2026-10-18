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
        // Set the max here so we can follow through thte function
        let max = 0;

        const dfs = (node: TreeNode): number => {
            if (node === null) return 0;
            const leftNum = dfs(node.left);
            const rightNum = dfs(node.right);
            
            max = Math.max(max, leftNum + rightNum);
            // Always remember to add 1!
            return Math.max(leftNum, rightNum) + 1;
        };

        dfs(root);
        return max;
    }
}
