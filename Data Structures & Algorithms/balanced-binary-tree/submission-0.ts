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

        const dfs = (node: TreeNode): {count: number, bal: boolean}=> {
            if(node === null ) {
                return {count: 0, bal: true};
            }

            const left = dfs(node.left)
            const right = dfs(node.right)
            if(Math.abs(left.count - right.count) <= 1 && right.bal && left.bal){
                return {count: 1 + Math.max(left.count, right.count), bal: true}
            }
            return {count: left.count, bal: false}

        }
        return dfs(root).bal
    }
}
