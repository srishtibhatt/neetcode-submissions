class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {

        let adj={};
        let inDegree={};
        const N = words.length;
        for(const word of words){
            for(const char of word){
                adj[char]= new Set();
                inDegree[char]=0;
            }
        }

        for(let i=0;i<N-1;i++){
            const str1=words[i];
            const str2=words[i+1];
            const minLen= Math.min(str1.length,str2.length);

            //if both strings are same
            if (str1.length > str2.length && 
                str1.slice(0, minLen) === str2.slice(0, minLen)) {
                return "";
            }

            for(let j =0;j<minLen;j++){
                if(str1[j]!== str2[j]) {
                    if(!adj[str1[j]].has(str2[j])){
                        adj[str1[j]].add(str2[j]);
                        inDegree[str2[j]]+=1;
                    }
                    break;
                }
            }
        }

        const q=new Queue();
        for(let c in inDegree){
            if(inDegree[c]===0){
                q.push(c);
            }
        }

        let res=[];
        while(!q.isEmpty()){
            let char=q.pop();
            res.push(char);
            for(let neighbor of adj[char]){
                inDegree[neighbor]-=1;
                if(inDegree[neighbor]===0){
                    q.push(neighbor);
                }
            }
        }

        if(res.length !== Object.keys(inDegree).length) return "";

        return res.join("");

    }
}
