function Main(Input) {
    let food = Number(Input[0]);
    let hay = Number(Input[1]);
    let cover = Number(Input[2]);
    let pigWeight = Number(Input[3]);

    for (let i = 1; i <= 30; i++) {
        food -= 0.3;
        if (i % 2 === 0) {
            hay -= food * 0.05;
        }
        if (i % 3 === 0) {
            cover -= pigWeight * (1 / 3);
        }
    }

    if (food.toFixed(2) <= 0 || hay.toFixed(2) <= 0 || cover.toFixed(2) <= 0) {
        console.log("Merry must go to the pet store!");
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
    }
}

Main(["9",
"5",
"5.2",
"1"])


