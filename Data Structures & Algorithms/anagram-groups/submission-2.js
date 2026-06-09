class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map={};
        for(let str of strs){
            const sortStr=str.split('').sort().join('');
            if(!map[sortStr]){
                map[sortStr]=[];
            }
            map[sortStr].push(str);
        }
        return Object.values(map);
    }
}
