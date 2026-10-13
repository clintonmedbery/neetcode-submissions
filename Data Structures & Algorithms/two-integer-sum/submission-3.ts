class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const left = 0;
        const right = nums.length - 1;
        for (let i = 0; i < nums.length; i++) {
            for (let j = nums.length; j > 0; j--) {
                if(j <= i) {
                    continue;
                }
                if(nums[i] + nums[j] === target){
                    console.log([i, j])
                    return [i, j];
                }
            }
        }

    }
}
