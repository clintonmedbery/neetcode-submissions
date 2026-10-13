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
        const chars = s.split('');
        const sMap = new Map<string, number>();
        const tMap = new Map<string, number>();
        for (let i = 0; i < s.length; i++){
            const maybeS = sMap.get(s[i]);
            if(maybeS){
                sMap.set(s[i], maybeS + 1)
            } else {
                sMap.set(s[i], 1)
            }

            const maybeT = tMap.get(t[i]);
            if(maybeT){
                tMap.set(t[i], maybeT + 1)
            } else {
                tMap.set(t[i], 1)
            }

            
        }
        if(tMap.size !== sMap.size){
            return false;
        }
        console.log(tMap, sMap)
        for (var [key, val] of sMap) {
            const test = tMap.get(key);
            if(!test || test !== val) {
                return false;
            }
        }
        return true;
    }
}
