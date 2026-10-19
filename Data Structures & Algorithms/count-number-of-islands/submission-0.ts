class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        //Setup
        const rows = grid.length;
        const cols = grid[0].length;
        let count = 0;
        const visited = new Set<string>();
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        //dfs algo
        const dfs = (row: number, col: number, visited: Set<string>) => {
            const key = `${row}:${col}`;
            // Check if col is invalid
            if(row < 0 || row >= rows || col < 0 || col >= cols) return;
            if(grid[row][col] !== "1" || visited.has(key)) return
            visited.add(key);
            for(let [dr, dc] of directions) {
                dfs( row + dr, col + dc, visited)
            }
        }

        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                if(grid[r][c] === "1" && !visited.has(`${r}:${c}`)) {
                    dfs(r, c, visited)
                    count++
                }
            }
        }
        return count;
    }
}
