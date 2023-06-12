function Main(n) {
    for (let i = 0; i < n; i++) {
        let letter1 = String.fromCharCode(97 + i);
        for (let k = 0; k < n; k++) {
            let letter2 = String.fromCharCode(97 + k);
            for (let l = 0; l < n; l++) {
                let letter3 = String.fromCharCode(97 + l);
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}

Main(3)