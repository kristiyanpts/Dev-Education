function Main(Input) {
    let racers = Input.shift().split(', ');
    let namePattern = /[A-Za-z]+/g;
    let distancePattern = /\d/g;
    let i = 0;
    let comptetition = {};

    while (Input[i] !== "end of race") {
        let tempRacer = [];
        let tempDistance = [];
        while ((valid = namePattern.exec(Input[i])) !== null) {
            tempRacer.push(valid[0])
        }
        while ((valid = distancePattern.exec(Input[i])) !== null) {
            tempDistance.push(valid[0])
        }
        let racer = tempRacer.join("");
        let distanceRan = 0;
        for (const distance of tempDistance.map(Number)) {
            distanceRan += distance;
        }
        if (comptetition[racer] && racers.includes(racer)) {
            comptetition[racer] += distanceRan;
        } else if (!comptetition[racer] && racers.includes(racer)) {
            comptetition[racer] = distanceRan;
        }
        i++;
    }

    let sortedShit = Object.entries(comptetition).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedShit[0][0]}`);
    console.log(`2nd place: ${sortedShit[1][0]}`);
    console.log(`3rd place: ${sortedShit[2][0]}`);
}

Main(['George, Peter, Bill, Tom',

'G4e@55or%6g6!68e!!@ ',

'R1@!3a$y4456@',

'B5@i@#123ll',

'G@e54o$r6ge#',

'7P%et^#e5346r',

'T$o553m&6',

'end of race'])