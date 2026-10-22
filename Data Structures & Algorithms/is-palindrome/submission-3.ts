class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const trim = s.replace(/[^a-zA-Z0-9]/g, "").trim().toLowerCase();
        console.log(trim)
        let left = 0;
        let right = trim.length - 1
        while(left < right) {
            if(trim[left] !== trim[right]) {
                return false
            }
            left++;
            right--;
        }
        return true;
    
    }
}
