class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded='';
        for(let str of strs){
            encoded+=str.length+'#' + str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res=[];
        let i=0;
        while(i<str.length){
            let j=i;
            while(str[j]!=='#'){
                j++;
            }
            const len=parseInt(str.slice(i,j),10);
            const decodestring= str.slice(j+1,j+1+len);
            res.push(decodestring);
            i=j+1+len;
        }
        return res;
    }
}
