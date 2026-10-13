class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let score = 0;
        const scores = []     
        while (operations.length > 0) {
            console.log(operations);

            const currentOperation = operations.shift();
            if (currentOperation === "D") {
              const newScore = scores[scores.length - 1] * 2;
              score = score + newScore;
              scores.push(newScore);
            }

            if (currentOperation === "+") {
               const newScore = scores[scores.length - 1] + scores[scores.length - 2];
               scores.push(newScore);
               score = score + newScore;
            }

            if (currentOperation === "C") {
                const takeAway = scores.pop();
                score = score - takeAway;
            }

            const maybeScore = parseInt(currentOperation, 10);
            if (!Number.isNaN(maybeScore)) {
                scores.push(maybeScore)
                score = score + maybeScore;
            }
            console.log(score);
            // lastOperation = currentOperation;
        }
        return score;
    }
}
