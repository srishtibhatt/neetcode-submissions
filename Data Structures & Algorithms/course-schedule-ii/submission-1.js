class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const graph = new Map();
        const link = new Array(numCourses).fill(0);


        for(let[course,prereq] of prerequisites){
            if(!graph.has(prereq)){
                graph.set(prereq,[]);
                }
            graph.get(prereq).push(course); //course->prereq
            link[course]++;
        }

        const queue=[];
        for(let i=0;i<numCourses;i++){
            if(link[i]===0){
                queue.push(i);
            }
        }

        //BFS traversal
        const count=[];
        while(queue.length>0){
            const course = queue.shift();
            count.push(course);
            if(graph.has(course)){
                for(let neighbor of graph.get(course)){
                    link[neighbor]--;
                    if(link[neighbor]===0) queue.push(neighbor);
                }
            }
        }
        return count.length===numCourses ? count : [];
    }
}
