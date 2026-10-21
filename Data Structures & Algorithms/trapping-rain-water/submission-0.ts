class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let left = 0;
        let right = height.length - 1;
        let topLeft = 0;
        let topRight = 0
        let total = 0;

        while(left < right) {
            if(height[left] < height[right]) {
                // If current > topLeft we update and move on
                if (height[left] >= topLeft) {
                    topLeft = height[left];
                // Else add to current water
                } else {
                    total = (topLeft - height[left]) + total;
                }
                //iterate left
                left++;
            } else {
                // If current > topRight we update and move on
                 if (height[right] >= topRight) {
                    topRight = height[right];
                // Else add to current water
                } else {
                    total = (topRight - height[right]) + total;
                }

                //iterate right
                right--;
            }
        }
        console.log(total)
        return total;
    }
}
