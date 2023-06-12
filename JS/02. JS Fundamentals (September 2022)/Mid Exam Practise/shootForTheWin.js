function Main(Input) {
    let targets = Input[0].split(' ');
    let shotTargets = 0;
    let i = 1;

    for (let k = 0; k < targets.length; k++) {
        targets[k] = Number(targets[k])
    }

    while (Input[i] !== "End") {
        let index = Number(Input[i]);
        let targetValueAtIndex = 0;

        if (targets[index] !== undefined && targets[index] !== -1) {
            targetValueAtIndex = targets[index];
            targets[index] = -1;
            shotTargets++;

            for (let k = 0; k < targets.length; k++) {
                if (targets[k] !== -1) {
                    if (targets[k] > targetValueAtIndex) {
                        targets[k] -= targetValueAtIndex;
                    } else {
                        targets[k] += targetValueAtIndex;
                    }
                }
            }
        }

        i++;
    }

    console.log(`Shot targets: ${shotTargets} -> ${targets.join(" ")}`);
}

Main(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])
