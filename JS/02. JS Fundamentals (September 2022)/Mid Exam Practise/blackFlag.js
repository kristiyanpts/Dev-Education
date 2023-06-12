function Main(Input) {
    let days = Number(Input[0]);
    let dailyPlunder = Number(Input[1]);
    let expectedPlunder = Number(Input[2]);

    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;

        if (i % 3 === 0) {
            totalPlunder += (dailyPlunder * 0.5);
        }
        if (i % 5 === 0) {
            totalPlunder -= (totalPlunder * 0.3);
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${((totalPlunder / expectedPlunder) * 100).toFixed(2)}% of the plunder.`);
    }
}

Main((["10", "20", "380"]))