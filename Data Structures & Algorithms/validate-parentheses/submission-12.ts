class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            switch (s[i]) {
                case "(":
                    stack.push(")");
                    break;
                case "{":
                    stack.push("}");
                    break;
                case "[":
                    stack.push("]");
                    break;
                case ")":
                    if (stack.pop() !== ")") return false;
                    break;
                case "}":
                    if (stack.pop() !== "}") return false;
                    break;
                case "]":
                    if (stack.pop() !== "]") return false;
                    break;
            }
        }

        return stack.length === 0;
    }
}
