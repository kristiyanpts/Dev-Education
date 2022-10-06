function Main(fNum, sNum, tNum) {
    console.log(subtract(sum(fNum, sNum), tNum));
}

function sum(fNum, sNum) {
    return fNum + sNum;
}

function subtract(fNum, sNum) {
    return fNum - sNum;
}

Main(1, 17, 30)