class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        const numSet = new Set(nums);
        console.log(numSet)
        let longest = 0;
        for (let item of numSet) {
            // Is it the start
            if(!numSet.has(item - 1)) {
                // If it is, how far can we go out?
                let i = 1;
                while(numSet.has(item + i)) {
                    i++;
                }
                if(i > longest){
                    longest = i;
                }
            }
        }
        return longest
    }
}
