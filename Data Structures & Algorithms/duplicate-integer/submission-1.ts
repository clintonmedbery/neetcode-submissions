class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numMap = {};
        for (let i = 0; i <= nums.length - 1; i++) {
            if (numMap[nums[i].toString()] === undefined) {
                numMap[nums[i].toString()] = true;
            } else {
                return true;
            }
        }
        return false;
    }
}
