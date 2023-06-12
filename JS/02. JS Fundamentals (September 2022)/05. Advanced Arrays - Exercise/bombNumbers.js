function Main(arr, special) {
    while (arr.includes(special[0])) {
        let index = arr.indexOf(special[0]);
        let start = index - special[1];
        let end = special[1] * 2 + 1;

        if (start < 0) {
            end += start;
            start = 0;
        }

        arr.splice(start, end)
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

Main([1, 7, 7, 1, 2, 3],

    [7, 1])