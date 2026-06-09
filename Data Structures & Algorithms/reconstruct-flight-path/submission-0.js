class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {

        //build the graph and sort distance lexicographically
        const graph = new Map();
        tickets.sort().reverse();

        for(const[from, to] of tickets){
            if(!graph.has(from)) graph.set(from,[]);
            graph.get(from).push(to);
        }

        const result=[];
        function dfs(airport){
            let airports=graph.get(airport);
            while(graph.has(airport) && airports.length>0){
                const destination= airports.pop();
                dfs(destination);
            }
            result.push(airport);
        }
        dfs("JFK");
        return result.reverse();
    }
}
