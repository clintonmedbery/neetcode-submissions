class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const itemsArray = s.split("");
        if (itemsArray.length % 2 !== 0) {
            return false;
        }
        const stack = [];
        for( let i = 0; i < itemsArray.length; i++) {
            const item = itemsArray[i];
            switch (item) {
                case "(":
                    stack.push(")")
                    break;

                case "{":
                    stack.push("}")

                    break;

                case "[":
                    stack.push("]")
                    break;

                case ")":
                    if(stack.pop() !== ")") return false;
                    break;

                case "}":
                    if(stack.pop() !== "}") return false;

                    break;

                case "]":
                    if(stack.pop() !== "]") return false;

                    break;
                default:
                    return false;
            }
        }
        console.log("stack", stack)
        return stack.length === 0;
    }
}
