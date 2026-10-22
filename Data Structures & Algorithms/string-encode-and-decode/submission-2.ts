class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded = "";
        for(const str of strs) {
            encoded += `${str.length}#${str}`
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let i = 0;
        const newStrings = []
        while(i < str.length) {
            let j = i;
            while(str[j] !== "#") {
                j++;
            }
            const count = Number(str.slice(i, j))
            console.log(count);
            j++;
            const newStr = str.slice(j, j + count);
            console.log(newStr)
            newStrings.push(newStr)
            i = j + count;
        }
        return newStrings;
    }
}
