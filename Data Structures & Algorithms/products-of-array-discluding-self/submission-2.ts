class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let n = nums.length
        let prodArr = Array(n).fill(0);

        let prefix = 1;
        for(let i = 0; i < nums.length; i++) {
            prodArr[i] = prefix
            prefix = nums[i] * prefix; 
        }
        console.log(prodArr)
        let suffix = 1;
        for(let i = nums.length - 1; i >= 0; i--) {
            prodArr[i] = suffix * prodArr[i]
            suffix = suffix * nums[i];
        }

        return prodArr;
    }
}
