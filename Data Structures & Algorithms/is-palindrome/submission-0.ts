class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const sArray = s
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLowerCase()
            .split("");
        let left = 0;
        let right = sArray.length - 1;
        console.log(sArray);
        while (left < right) {
            if (sArray[left] !== sArray[right]) {
                console.log(sArray[left].toLowerCase(), sArray[right].toLowerCase());
                return false;
            }
            left++
            right--
        }
        return true;
    }
}
