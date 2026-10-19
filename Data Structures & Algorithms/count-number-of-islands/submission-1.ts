class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        // Setup there is lots of it
        const rows = grid.length;
        const cols = grid[0].length
        const visited = new Set<string>();
        const directions = [[-1,0], [1,0], [0,-1],[0,1]];
        let count = 0;

        //the algo
        const dfs = (row: number, col: number, visited: Set<string>) => {
            const key = `${row}:${col}`;
            // remove the impossible
            if(row < 0 || row >= rows || col < 0 || col >= cols) return
            // If water or visited land we don't care
            if(grid[row][col] !== "1" || visited.has(key)) return
            visited.add(key);
            for(let [dr, dc] of directions) {
                dfs(row + dr, col + dc, visited);
            }
        }

        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                // This is land we have not visited it is new land
                if(grid[r][c] === "1" && !visited.has(`${r}:${c}`)) {
                    dfs(r, c, visited)
                    count++
                }
            }
        }
        return count;
    }
}
