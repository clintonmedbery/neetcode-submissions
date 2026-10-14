class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let k = 0; //k = keeper

        for(let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if(num !== val){
                nums[k] = nums[i];
                k++;
            } 
        }
        console.log(nums)
        return k;
    }
}
