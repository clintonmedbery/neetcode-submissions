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

            // check that there is something on the stack and check that the height is less than last height
            while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
                // Not the current index but the index of the last tall bar
                const tallBarIndex = stack.pop();
                const tallBarHeight = heights[tallBarIndex];

                let width;
                if (stack.length === 0) {
                    width = i;
                } else {
                    // We take the current index MINUS the previous index minus 1
                    // Remember the space between 2-3-4 is just - - that is 2
                    width = i - stack[stack.length - 1] - 1;
                }
                maxArea = Math.max(maxArea, width * tallBarHeight);
            }

            // Add the index to the stack
            stack.push(i);
        }

        while (stack.length > 0) {
            const tallBarIndex = stack.pop();
            const tallBarHeight = heights[tallBarIndex];

            let width;
            if (stack.length === 0) {
                width = heights.length;
            } else {
                width = heights.length - stack[stack.length - 1] - 1;
            }
            maxArea = Math.max(maxArea, width * tallBarHeight);
        }

        return maxArea;
    }
}
