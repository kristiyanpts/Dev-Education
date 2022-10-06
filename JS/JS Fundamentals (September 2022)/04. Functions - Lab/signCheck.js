function Main(fNum, sNum, tNum) {
    let neggativeNumsCount = 0;
    if (fNum < 0) {
        neggativeNumsCount++;
    } 
    if (sNum < 0) {
        neggativeNumsCount++;
    } 
    if (tNum < 0 ) {
        neggativeNumsCount++;
    }

    if (neggativeNumsCount % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

Main(-1, -2, 3)