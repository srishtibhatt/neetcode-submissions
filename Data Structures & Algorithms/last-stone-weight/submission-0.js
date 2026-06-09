class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const queue= new MaxPriorityQueue();

        for(const stone of stones){
            queue.enqueue(stone);
        }

        while(queue.size()>1){
            let stone1=queue.dequeue();
            let stone2=queue.dequeue();

            if(stone1!==stone2){
                queue.enqueue(stone1-stone2);
            }
        }
        return queue.size()=== 1 ? queue.dequeue():0;

    }
}
