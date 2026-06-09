class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr ="";
        for(let str of strs){ //hello
            encodedStr +=  str.length + "#" + str; //5#hello
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(encodedStr) {
        let decodedStr = [];
        let i =0;
        while(i<encodedStr.length){
            let hashPos = encodedStr.indexOf("#" , i); //1
            let length= parseInt(encodedStr.substring(i , hashPos)); //0-1 =>5
            i= hashPos + 1;
            decodedStr.push(encodedStr.substring(i , i+length));
            i+=length;
        }
        return decodedStr;
    }
}
