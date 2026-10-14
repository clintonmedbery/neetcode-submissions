class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        let prefix = 1;
        const productArray = Array(n).fill(1);
        for (let i = 0; i< nums.length; i++ ) {
            productArray[i] = prefix;
            prefix *= nums[i];
        }
        let suffix = 1;
        for (let i = n - 1; i >= 0; i-- ) {
            productArray[i] *= suffix;
            suffix *= nums[i];
        }
        return productArray;
    }
}
