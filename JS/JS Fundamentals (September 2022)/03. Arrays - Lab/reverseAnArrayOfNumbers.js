function Main(n, arr) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }

    console.log(newArr.reverse().join(" "));
}

Main(3, [10, 20, 30, 40, 50])