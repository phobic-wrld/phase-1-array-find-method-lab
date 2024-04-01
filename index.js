// code your solution here
function superbowlWin(superbowlResults) {
    const winningYear = superbowlResults.find(result => result.result === "W");
    return winningYear ? winningYear.year : undefined;
}

