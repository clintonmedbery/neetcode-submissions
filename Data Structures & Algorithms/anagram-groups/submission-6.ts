class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const sortMap = new Map<string, string[]>();
        for(let i = 0; i < strs.length; i++) {
            const sortString = strs[i].split("").sort().join("");
            sortMap.set(sortString, [...sortMap.get(sortString) ?? [], strs[i]])
        }
        return [...sortMap.values()];
    }
}
