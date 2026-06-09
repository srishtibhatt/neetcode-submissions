class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {

        const graph = new Map();
        //create the adjency list
         for (let i = 1; i <= n; i++) {
            graph.set(i, []);
        }

        for(let[u,v,w] of times){
            // if(!graph.has(u)) graph.set(u,[]);
            graph.get(u).push([v,w]);
        }

        // Use a priority queue (min-heap) for Dijkstra's algorithm
        const minHeap= new MinPriorityQueue(entry=>entry[0]);
        minHeap.enqueue([0,k]);

        const visit= new Set();
        let t=0; 

        //BFS algo
        while(!minHeap.isEmpty()){
            const [w1,n1]=minHeap.dequeue();
            if(visit.has(n1)) continue;

            visit.add(n1);
            t=w1; //setting the weight as w1 currently

            for(const[neighbors,w2] of graph.get(n1)){
                //if neighbor is not visited for the above popped n1 node , then enqueue it in queue.
                if(!visit.has(neighbors)) {
                    minHeap.enqueue([w1+w2 , neighbors]);
                }
            }
        }
        return visit.size === n ? t : -1;
    }
}
