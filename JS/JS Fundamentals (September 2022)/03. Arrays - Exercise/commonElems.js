function Main(fArr, sArr) {
    for (let i = 0; i < fArr.length; i++) {
        for (let k = 0; k < sArr.length; k++) {
            if (fArr[i] === sArr[k]) {
                console.log(fArr[i]);
            }
        }
    }
}

Main(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

['s', 'o', 'c', 'i', 'a', 'l'])