function Main(Input) {
    let wagons = Input[0].split(' ').map(Number);
    let maxPeople = Number(Input[1]);

    for (let i = 2; i < Input.length; i++) {
        let command = Input[i].split(' ');

        if (command[0] === "Add") {
            wagons.push(Number(command[1]));
        } else {
            for (let k = 0; k < wagons.length; k++) {
                if (wagons[k] + Number(command[0]) <= maxPeople) {
                    wagons[k] += Number(command[0]);
                    break;
                }
            }
        }
    }
    
    console.log(wagons.join(" "));
}

Main(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6'])