class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const rows = grid.length;
        const cols = grid[0].length;
        const directions = [
            [-1, 0],
            [1, 0],
            [0, 1],
            [0, -1],
        ];
        const queue = [];
        const visited = new Set<string>();
        let minutes = 0;

        // Find the rotten Fruit
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                    visited.add(`${r}:${c}`);
                }
            }
        }

        while (queue.length) {
            //
            const currentRottenFruit = queue.length;

            for (let i = 0; i < currentRottenFruit; i++) {
                const [row, col] = queue.shift();

                for (const [dr, dc] of directions) {
                    const newRow = row + dr;
                    const newCol = col + dc;
                    const key = `${newRow}:${newCol}`;
                    // Is the row and column valid? Has the fruit been visited? Is it a fruit at all
                    if (
                        newRow >= 0 &&
                        newRow < rows &&
                        newCol >= 0 &&
                        newCol < cols &&
                        !visited.has(key) && grid[newRow][newCol] === 1
                    ) {
                        visited.add(key);
                        queue.push([newRow, newCol]);
                        grid[newRow][newCol] = 2;
                    }
                }
            }

            if(queue.length > 0) minutes++
        }

         for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    return -1;  // Found unreachable fresh orange
                }
            }
        }

        console.log(grid);
        return minutes
    }
}
