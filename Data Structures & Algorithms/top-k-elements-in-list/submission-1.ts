class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        const fMap = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            fMap.set(num, (fMap.get(num) ?? 0) + 1)
        }
        const vals = Array.from(fMap.entries()).sort((a, b) => b[1] - a[1]).map(x => x[0])
        return vals.splice(0, k)
    }
}
