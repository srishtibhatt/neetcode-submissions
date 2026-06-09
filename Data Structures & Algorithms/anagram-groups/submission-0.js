class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let str of strs){
            const sortedStr= str.split('').sort().join('');
            //check each key and store the key in an array , if not already present
            if(!map.has(sortedStr)){
                map.set(sortedStr,[]);
            }
            //get the corresponding matching strings for the key 
            map.get(sortedStr).push(str);
        }   
        //return all the sorted values
        return Array.from(map.values());
    }
}
