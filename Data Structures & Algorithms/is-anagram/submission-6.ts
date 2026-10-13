class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false;
        }
        const charCount = new Map<string, number>();
        for (let char of s){
            charCount.set(char, (charCount.get(char) ?? 0) + 1)
        }

        for (let char of t){
            const count = charCount.get(char);
            if(!count) return false;
            charCount.set(char, count - 1)
        }
        return true
    }
}
