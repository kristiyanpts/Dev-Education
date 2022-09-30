function Main(number) {
    let divisibles = [2, 3, 6, 7, 10];
    let isDivisible = false;
    divisibles.reverse();

    for (let i = 0; i < divisibles.length; i++) {
        if (number % divisibles[i] === 0) {
            console.log(`The number is divisible by ${divisibles[i]}`);
            isDivisible = true;
            break;
        }
    }

    if (!isDivisible) {
        console.log("Not divisible");
    }
}

Main(30)