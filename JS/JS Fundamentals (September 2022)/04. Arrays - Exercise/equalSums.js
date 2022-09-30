function Main(arr) {
    let foundIndex = false;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let k = 0; k < i; k++) {
            leftSum += arr[k];
        }

        for (let k = arr.length - 1; k > i; k--) {
            rightSum += arr[k];
        }

        if (leftSum === rightSum) {
            foundIndex = true;
            console.log(i);
            break;
        }
    }

    if (!foundIndex) {
        console.log("no");
    }
}

Main([10, 5, 5, 99,

    3, 4, 2, 5, 1,
    
    1, 4])