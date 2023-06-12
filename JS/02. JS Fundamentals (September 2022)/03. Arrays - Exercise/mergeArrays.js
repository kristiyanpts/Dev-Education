function Main(fArr, sArr) {
    let finalArr = [];
    for (let i = 0; i < fArr.length; i++) {
        if (i % 2 === 0) {
            finalArr.push(Number(fArr[i]) + Number(sArr[i]));
        } else {
            finalArr.push(fArr[i] + sArr[i]);
        }
    }

    console.log(finalArr.join(" - "));
}

Main(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])