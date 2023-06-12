function Main(Input) {
    let peopleGoing = [];

    for (let i = 0; i < Input.length; i++) {
        let command = Input[i].split(' ');

        if (command[2] === "going!") {
            if (!peopleGoing.includes(command[0])) {
                peopleGoing.push(command[0])
            } else {
                console.log(`${command[0]} is already in the list!`);
            }
        } else {
            if (peopleGoing.includes(command[0])) {
                peopleGoing.splice(peopleGoing.indexOf(command[0]), 1);
            } else {
                console.log(`${command[0]} is not in the list!`);
            }
        }
    }

    console.log(peopleGoing.join("\n"));
}

Main(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])