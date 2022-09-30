function Main(arr, expSum) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[i] + arr[k] === expSum) {
                console.log(`${arr[i]} ${arr[k]}`);
            }
        }
    }
}

Main([1, 2, 3, 4, 5, 6], 6)