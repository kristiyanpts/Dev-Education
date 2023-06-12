function Main(Input) {
    let energy = Number(Input[0]);
    let battlesWon = 0;
    let i = 1;

    while (Input[i] !== "End of battle") {
        let dist = Number(Input[i]);

        if (energy < dist) {
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
            energy -= dist;
            break;
        }

        energy -= dist;
        battlesWon++;

        if (battlesWon % 3 === 0) {
            energy += battlesWon;
        }

        i++;
    }

    if (energy >= 0) {
        console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
    }
}

Main(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
