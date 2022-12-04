function Main(Input) {
    let numbers = Input.shift().split(' ').map(Number);
    let info = Input.shift().split(' ');

    while (info[0] !== "Finish") {
        switch (info[0]) {
            case "Add":
                let numToAdd = Number(info[1]);
                numbers.push(numToAdd);
                break;
            case "Remove":
                let numToRemove = Number(info[1]);
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] === numToRemove) {
                        numbers.splice(i, 1);
                        break;
                    }
                }
                break;
            case "Replace":
                let numToReplace = Number(info[1]);
                let replacement = Number(info[2]);
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] === numToReplace) {
                        numbers[i] = replacement;
                        break;
                    }
                }
                break;
            case "Collapse":
                let minNumber = Number(info[1]);
                let valuesToRemove = [];
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] < minNumber) {
                        valuesToRemove.push(numbers[i]);
                    }
                }
                for (let i = 0; i < valuesToRemove.length; i++) {
                    let index = numbers.indexOf(valuesToRemove[i]);
                    numbers.splice(index, 1);
                }
                break;
            default:
                break;
        }

        info = Input.shift().split(' ');
    }

    console.log(numbers.join(" "));
}

Main(["1 20 -1 10",
"Collapse 8",
"Finish"])
