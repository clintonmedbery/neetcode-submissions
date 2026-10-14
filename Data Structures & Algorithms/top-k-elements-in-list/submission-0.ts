class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numMap = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            numMap.set(num, (numMap.get(num) ?? 0) + 1);
        }

        const values = Array.from(numMap.entries()).sort((a, b) => b[1] - a[1]).map(x => x[0]);
        console.log(values)
        return values.splice(0, k)
    }
}
