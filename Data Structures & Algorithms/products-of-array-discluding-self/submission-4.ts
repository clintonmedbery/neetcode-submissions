class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prodArr = Array(nums.length).fill(1);

        let prefix = 1;
        for (let i = 0; i < nums.length; i++) {
            prodArr[i] = prefix;
            prefix = prefix * nums[i];
        }

        let suffix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            prodArr[i] = prodArr[i] * suffix;
            suffix = suffix * nums[i];
        }

        return prodArr;
    }
}
