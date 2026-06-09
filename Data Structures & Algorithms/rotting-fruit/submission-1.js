class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
    */
    orangesRotting(grid) {
        let rows=grid.length;
        let cols= grid[0].length;
        let directions= [[1,0],[-1,0],[0,1],[0,-1]];
        let fresh=0;
        let time=0;

        let queue=[];

        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                if(grid[i][j]===1) fresh++;
                else if(grid[i][j]===2) queue.push([i,j]);
                }
            }

        if (fresh === 0) return 0;

        while(queue.length>0){
            let rottenThisRound=false;
            let len = queue.length;

            for (let i = 0; i < len; i++) {
                const [r, c] = queue.shift();

                    //explore all 4 directions for the above fetched rotten orange position
                    for(let [dr,dc] of directions){
                        let newR=r+dr;
                        let newC=c+dc;

                        if(newR>=0 && newR<rows && newC>=0 && newC<cols && grid[newR][newC]===1 ){
                            grid[newR][newC]=2; //rott the fruit
                            queue.push([newR, newC]); 
                            fresh--;
                            rottenThisRound=true;
                        }
                    }   
                }
            if(rottenThisRound) {
                time++;
                }
            }
            return fresh===0 ? time : -1;
        }  
}
