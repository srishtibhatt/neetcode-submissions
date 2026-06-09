class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length>s2.length){
            return false;
        }
        let s1count=new Array(26).fill(0);
        let s2count=new Array(26).fill(0);
        

        for(let i=0;i<s1.length;i++){
            s1count[s1.charCodeAt(i)-97]++;
            s2count[s2.charCodeAt(i) - 97]++;
        }
        for(let i=0;i<s2.length-s1.length;i++){
            if(matches(s1count,s2count)) return true;
            s2count[s2.charCodeAt(i)-97]--;
            s2count[s2.charCodeAt(i+s1.length)-97]++;
        }
        return matches(s1count,s2count);

}
}
    function matches(s1count,s2count){
    for(let i=0;i<26;i++){
        if(s1count[i]!==s2count[i]) return false;
    }
    return true;
    }

