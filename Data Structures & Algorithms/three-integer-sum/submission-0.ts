class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const finalArray = [];
        // Sort
        const sortedNums = nums.sort((a, b) => a - b);
        const n = sortedNums.length;
        console.log(sortedNums);
        // Loop with n - 3
        for (let i = 0; i <= n - 3; i++) {
            console.log(sortedNums[i]);
            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
            // while loop
            let left = i + 1;
            let right = n - 1;
            while (left < right) {
                const sum = sortedNums[left] + sortedNums[right] + sortedNums[i];

                // if 0 add it
                if (sum === 0) {
                    while (left < right && sortedNums[left] === sortedNums[left + 1]) left++;
                    while (left < right && sortedNums[right] === sortedNums[right - 1]) right--;
                    console.log({
                        left,
                        right,
                        sum,
                        leftThing: sortedNums[left],
                        middleThing: sortedNums[i],
                        rightThing: sortedNums[right],
                    });
                    finalArray.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else if (sum > 0) {
                    right--;
                }
            }
        }

        // if less than
        console.log(finalArray);
        // if more than
        return Array.from(new Set(finalArray));
    }
}
