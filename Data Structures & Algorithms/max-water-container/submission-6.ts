class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        const n = heights.length;
        let left = 0;
        let right = n - 1;
        let topArea = 0;
        while (left < right) {
            const width = right - left;
            const height = Math.min(heights[left], heights[right]);
            const area = width * height;
            topArea = Math.max(topArea, area);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return topArea;
    }
}
