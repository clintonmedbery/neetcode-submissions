class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // Exit early if length not equal
        if(s.length !== t.length) {
            return false;
        }
        const stringMap = new Map<string, number>();
        //Otherwise make a map of the counts
        for (let char of s) {
            stringMap.set(char, (stringMap.get(char) ?? 0) + 1)
        }

        // Loop through second string
        for (let char of t) {
            // Get the char
            const count = stringMap.get(char);
            // If nothing exists or 0, there is no match
            if(!count) return false;
            stringMap.set(char, count - 1)
        }
        return true;
    }
}
