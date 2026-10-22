class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(t.length !== s.length) {
            return false
        }
        const map = new Map<string, number>();

        for(let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) ?? 0) + 1)
        }
        for(let i = 0; i < t.length; i++) {
            const maybeNum = map.get(t[i]);
            if(!maybeNum) {
                return false;
            }
            map.set(t[i], maybeNum - 1);
        }
        return true;
    }
}
