class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.split('').sort().join('')===t.split('').sort().join('')) return true;
        else return false;
    }
}
