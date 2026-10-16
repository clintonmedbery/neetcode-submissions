class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // Make a map of the difference of numbers
        const diffMap = new Map<number, number>();
        for(let i = 0; i < nums.length; i++) {
            // Get the num
            const val = nums[i];
            // See if we have a match
            const maybeNum = diffMap.get(val);
                        console.log({val, maybeNum})

            // This means we found it
            if(maybeNum !== undefined) {
                return [maybeNum, i]
            }
            // Add it if not
            diffMap.set(target - val, i)
        }
        return [];
    }
}
