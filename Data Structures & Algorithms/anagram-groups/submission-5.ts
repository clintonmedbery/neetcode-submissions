class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // Make a map for the string groups
        const stringMap = new Map<string, string[]>();
        // Iterate through strings
        for(let i = 0; i < strs.length; i++) {
            // Sort the string to give a normalized string
            const formatString = strs[i].split('').sort().join('');
            stringMap.set(formatString, [...(stringMap.get(formatString) ?? []), strs[i]])

        }
        return Array.from(stringMap.values())
    }
}
