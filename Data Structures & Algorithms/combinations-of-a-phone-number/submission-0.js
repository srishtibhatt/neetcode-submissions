class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const res = [];
        if (digits.length === 0) return res;
        const digitToChar = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "qprs",
            "8": "tuv",
            "9": "wxyz"
        };
    const backtrack=(i,str)=>{
        if(str.length===digits.length){
            return res.push(str);
            
        }
        for(let j of digitToChar[digits[i]]){
            backtrack(i+1,str+j);
        }
    }
    backtrack(0,"");
    return res;
        
    }
}
