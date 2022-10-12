function Main(n, k2) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let k = i - k2; k <= i - 1; k++) {
            if (result[k] !== undefined) {
                sum += result[k];
            }
        }
        result.push(sum);
    }
    console.log(result.join(" "));
}

Main(6, 3)