class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res=0;

        for(let i=0;i<s.length;i++){
            let l=i;
            let r=i;
            while(l>=0 && r<s.length && s.charAt(r)===s.charAt(l)){
                res++;
                l--;
                r++;
            }

            //even
            l=i;
            r=i+1;
            while(l>=0 && r<s.length && s.charAt(r)===s.charAt(l)){
                res++;
                l--;
                r++;
            }
        }
    return res;
}
}
