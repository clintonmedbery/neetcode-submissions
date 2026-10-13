class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const stringMap = new Map<string, string[]>();
        for (let i = 0; i < strs.length; i++) {
            const formattedString = strs[i].split('').sort().join('');
            stringMap.set(formattedString, [...(stringMap.get(formattedString) ?? []), strs[i]]);
        }
        return Array.from(stringMap.values());
    }
}
