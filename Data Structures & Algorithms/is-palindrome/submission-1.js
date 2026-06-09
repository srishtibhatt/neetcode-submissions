class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let currStr=s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
        let reverseStr= currStr.split('').reverse().join('');
        return currStr===reverseStr;
    }
}
