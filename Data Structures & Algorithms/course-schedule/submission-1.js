class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {

        //create a graph and an inDegree array (which will contain every numCourse(every node) and initialize all with 0)
        //inDegree will increase , with checking the no. of incoming paths to that particular node.
        const graph= new Map();
        const inDegree= new Array(numCourses).fill(0);

        //initializing graph
        for(const[course,preReq] of prerequisites){
            if(!graph.has(preReq)){
                graph.set(preReq,[]);
            }
            graph.get(preReq).push(course); //preReq->course
            inDegree[course]++; //increment the upcoming node counter for the course 
        }

        //analyzing the course with 0 inDegree (0 linkage) and pushing it in queue
        const queue=[];
        for(let i=0;i<numCourses;i++){
            if(inDegree[i]===0){
                queue.push(i);
            }
        }

        //BFS Traversal
        let processedCount =0;
        while(queue.length>0){
            const course = queue.shift() //take out the frst elemnt from the queue
            processedCount++;
            //check its neighours and remove their linkage to the currently taken element
        if(graph.has(course)){
            for( const neighbor of graph.get(course)){
                inDegree[neighbor]--; //remove the linkage , reduce the inDegree of neigbors
                if(inDegree[neighbor]===0){
                    queue.push(neighbor); //pushing it in queue again if the degree gets 0 
                }
            }
        }
        }
            //If all courses have been processed, return true, else return false
            return processedCount===numCourses;
    }
}
