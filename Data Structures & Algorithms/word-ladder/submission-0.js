class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if (!wordList.includes(endWord)) return 0;
        let queue=[[beginWord]];
        let visited=new Set();
        visited.add(beginWord);

        function isDifference(word1, word2){
            let diffCount=0;

            for(let i =0;i<word1.length;i++){
                if(word1[i]!==word2[i]){
                    diffCount++;
                }
            }
            return diffCount === 1;
        }

        
        while(queue.length>0){
            let path = queue.shift();
            let currentWord = path[path.length - 1];

            if (currentWord === endWord) {
                return path.length;
            }

            for(let word of wordList){
                if(!visited.has(word) && isDifference(currentWord,word)){
                    visited.add(word);
                    queue.push([...path,word]);
                }
            }
        }
        return 0; //no path found
    }
}
