class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let res=[];
        let ptr1=0;
        let ptr2=0;
        while(ptr1<word1.length && ptr2<word2.length){
            res.push(word1[ptr1++],word2[ptr2++]);
        }
        res.push(word1.slice(ptr1));
        res.push(word2.slice(ptr2));
        return res.join('');
    }
}
