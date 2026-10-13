class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxCount = 0;
        let count = 0;
        for(let i = 0; i < nums.length; i++){
            
            if(nums[i] === 1){
                count = count + 1;
                if(count > maxCount) {
                    maxCount = count;
                }
            } else {
                count = 0;
            }
        }
        return maxCount;
    }
}
