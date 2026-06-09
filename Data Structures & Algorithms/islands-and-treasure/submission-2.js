class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[][]}
     */
    islandsAndTreasure(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // Directions (down, up, right, left)
        const queue = [];
        const INF = 2147483647; // Land cell value

        // Step 1: Initialize the queue with all treasure cells (0) and mark other cells as INF
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 0) {
                    queue.push([i, j]);  // Add the coordinates of treasure cells to the queue
                } else if (grid[i][j]!== -1) {
                    grid[i][j] = INF;  // Mark water cells as INF (not traversable)
                }
            }
        }

        let dist = 1; // Start BFS with distance 0 for treasure cells
        
        // Step 2: BFS to propagate distances from treasure cells
        while (queue.length > 0) {
            const len = queue.length;

            // Process all elements at the current BFS level
            for (let i = 0; i < len; i++) {
                const [r, c] = queue.shift(); // Dequeue the front element

                // Explore all 4 possible directions (down, up, right, left)
                for (const [dr, dc] of directions) {
                    const newR = r + dr;
                    const newC = c + dc;

                    // Check if the new position is within bounds and if the cell is land (INF)
                    if (newR >= 0 && newR < rows && newC >= 0 && newC < cols && grid[newR][newC] === INF) {
                        grid[newR][newC] = dist;  // Set the new distance (distance of current cell + 1)
                        queue.push([newR, newC]);  // Enqueue the new position
                    }
                }
            }
            dist++;  // Increase the distance for the next BFS level
        }
        
        // Step 3: Return the updated grid with the distances
        return grid;
    }
}
