function Main(Input) {
    let xpNeeded = Input.shift();
    let battles = Input.shift();
    let totalXp = 0;

    for (let i = 1; i <= battles; i++) {
        let xpGets = Input.shift();

        if (i % 3 === 0) {
            xpGets += xpGets * 0.15;
        }
        if (i % 5 === 0) {
            xpGets -= xpGets * 0.1;
        }
        if (i % 15 === 0) {
            xpGets += xpGets * 0.05;
        }

        totalXp += xpGets;

        xpNeeded -= xpGets;
        if (xpNeeded <= 0) {
            console.log(`Player successfully collected his needed experience for ${i} battles.`);
            break;
        }
    }

    if (xpNeeded > 0) {
        console.log(`Player was not able to collect the needed experience, ${xpNeeded.toFixed(2)} more needed.`);
    }
}

Main([400,
    5,
    50,
    100,
    200,
    100,
    20])
    