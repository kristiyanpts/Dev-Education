function Main(Input) {
    let parking = {};
    while (Input.length > 0) {
        let info = Input.shift().split(', ');
        if (info[0] === 'IN') {
            parking[info[1]] = 'IN';
        } else {
            delete parking[info[1]];
        }
    }
    for (const [plate, state] of Object.entries(parking).sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(plate);
    }
}

Main(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])