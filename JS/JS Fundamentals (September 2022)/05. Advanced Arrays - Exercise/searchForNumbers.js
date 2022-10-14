function Main(arr, manipulations) {
    let shit = [];
    for (let i = 0; i < manipulations[0]; i++) {
        shit.push(arr[i]);
    }
    shit.splice(0, manipulations[1]);
    let foundTimes = 0;
    for (let i = 0; i < shit.length; i++) {
        if (shit[i] === manipulations[2]) {
            foundTimes++;
        }
    }

    console.log(`Number ${manipulations[2]} occurs ${foundTimes} times.`);
}

Main([7, 1, 5, 8, 2, 7],

    [3, 1, 5])