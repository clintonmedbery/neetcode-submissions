class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        for(let i = 0; i < nums.length;) {
            const num = nums[i];
            if(num === val){
                nums.splice(i, 1);
            } else {
                i++;
            }
        }
        console.log(nums)
        return nums.length;
    }
}
