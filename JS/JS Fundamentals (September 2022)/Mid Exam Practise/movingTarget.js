function Main(Input) {
    let targets = Input[0].split(" ");
    let i = 1;

    while (Input[i] !== "End") {
        let info = Input[i].split(" ");
        let command = info[0];
        let index = Number(info[1]);
        let shit = Number(info[2]);

        switch (command) {
            case "Shoot":
                if (targets[index]) {
                    targets[index] = targets[index] - shit;
                }
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
                break;
            case "Add":
                if (targets[index]) {
                    // targets[index] = shit;
                    targets.splice(index, 0, shit);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case "Strike":
                if (index - shit >= 0 && index + shit < targets.length) {
                    targets.splice(index - shit, shit * 2 + 1);
                } else {
                    console.log("Strike missed!");
                }
                break;
            default:
                break;
        }
        i++;
    }

    console.log(targets.join("|"));
}

Main(["52 74 23 44 96 110",

"Shoot 5 10",

"Shoot 1 80",

"Strike 2 1",

"Add 22 3",

"End"])