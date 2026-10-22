class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        const numSet = new Set(nums);
        let longest = 0;
        for(let item of nums) {

            // This is a first item and we need to reach out
            if(!numSet.has(item - 1)){
                let i = 0;

                while(numSet.has(item + i)) {
                    i++;
                }
                longest = Math.max(longest, i)
            }
        }

        return longest;
    }
}
