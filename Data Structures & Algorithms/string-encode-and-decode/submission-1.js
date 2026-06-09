class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr="";
        for(let str of strs){
            encodedStr+=str.length+"#"+str;
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(encodedStr) {
        let decodedStr=[];
        let i=0;
        while(i<encodedStr.length){
            let hasPos=encodedStr.indexOf("#",i);
            let length=parseInt(encodedStr.substring(i,hasPos));
            i=hasPos+1;
            decodedStr.push(encodedStr.substring(i,length+i));
            i+=length;
        }
        return decodedStr;
    }
}
