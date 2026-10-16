class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const diffMap = new Map<number, number>();
        for(let i = 0; i < nums.length; i++) {
            const val = nums[i];
            const maybeIdx = diffMap.get(val);
            if(maybeIdx !== undefined) {
                return [maybeIdx, i];
            }
            diffMap.set(target - val, i)
        }
    }
}
