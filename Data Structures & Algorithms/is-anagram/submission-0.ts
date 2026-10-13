class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (t.length !== s.length) {
            return false;
        }
        const sMap = {};
        const tMap = {};
        for (let i = 0; i <= s.length - 1; i++) {
            if (!tMap[t[i]]) {
                tMap[t[i]] = 1;
            } else {
                tMap[t[i]] = tMap[t[i]] + 1;
            }
            if (!sMap[s[i]]) {
                sMap[s[i]] = 1;
            } else {
                sMap[s[i]] = sMap[s[i]] + 1;
            }
        }
        if(!Object.keys(sMap).every((key) => sMap[key] === tMap[key])) {
            return false;
        }
        return true;
    }
}
