class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const stack = [];
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            const currentHeight = heights[i];

            while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
                const topIndex = stack.pop();
                const topIndexHeight = heights[topIndex];

                let width;
                if (stack.length === 0) {
                    width = i;
                } else {
                    width = i - stack[stack.length - 1] - 1;
                }
                maxArea = Math.max(maxArea, width * topIndexHeight);
            }

            stack.push(i);
        }

        while (stack.length > 0) {
            const topIndex = stack.pop();
            const topIndexHeight = heights[topIndex];

            let width;
            if (stack.length === 0) {
                width = heights.length;
            } else {
                width = heights.length - stack[stack.length - 1] - 1;
            }
            maxArea = Math.max(maxArea, width * topIndexHeight);
        }

        return maxArea;
    }
}
