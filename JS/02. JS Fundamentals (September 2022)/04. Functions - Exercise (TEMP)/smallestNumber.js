function returnSmallestNumber(fNum, sNum, tNum) {
    let smallestNum = fNum;
    if (sNum < smallestNum) {
        smallestNum = sNum;
    }
    if (tNum < smallestNum) {
        smallestNum = tNum;
    }
    console.log(smallestNum);
}
returnSmallestNumber(600, 342, 123)