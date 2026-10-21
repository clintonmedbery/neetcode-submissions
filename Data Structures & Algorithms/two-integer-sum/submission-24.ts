class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        // The key will be the difference
        const diffMap = new Map<number, number>();
        for(let i = 0; i < nums.length; i++) {
            diffMap.set(target - nums[i], i);
        }
        console.log(diffMap)
        for(let i = 0; i < nums.length; i++) {
            const maybeDiff = diffMap.get(nums[i])
            console.log(nums[i])
            console.log(maybeDiff)
            if(maybeDiff && maybeDiff !== i) {
                return [maybeDiff, i]
            }
        }
    }
}
