function Main(num) {
    let progBar = "";
    for (let i = 10; i <= 100; i = i + 10) {
        if (i <= num) {
            progBar += "%";
        } else {
            progBar += ".";
        }
    }

    if (num !== 100) {
        console.log(`${num}% [${progBar}]`);
        console.log("Still loading...");
    } else {
        console.log("100% Complete");
        console.log(`[${progBar}]`);
    }
}

Main(100)