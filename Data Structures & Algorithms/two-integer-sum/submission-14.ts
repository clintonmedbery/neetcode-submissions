class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numMap = new Map<number, number>();
        for(let i = 0; i < nums.length; i++) {
            const val = nums[i];
            numMap.set(target - val, i);
        }
        console.log(numMap);
        for(let i = 0; i < nums.length; i++) {
            const val = nums[i];
            const maybeNum = numMap.get(val);
            console.log(maybeNum)
            if(maybeNum && maybeNum !== i){
                console.log([maybeNum, i])
                return [maybeNum, i];
            }
        }
    }
}
