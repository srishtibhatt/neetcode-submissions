class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let currentString=s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let reverseStr = currentString.split('').reverse().join('');
        return currentString === reverseStr;
    }
}
