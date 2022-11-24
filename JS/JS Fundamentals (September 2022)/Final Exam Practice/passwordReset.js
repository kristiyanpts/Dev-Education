function Main(Input) {
    let string = Input.shift();
    let commandInfo = Input.shift().split(' ');

    while (commandInfo[0] !== "Done") {
        switch (commandInfo[0]) {
            case "TakeOdd":
                let oddChars = [];
                for (let i = 0; i < string.length; i++) {
                    if (i % 2 !== 0) {
                        oddChars.push(string[i]);
                    }
                }
                string = oddChars.join("");
                console.log(string);
                break;
            case "Cut":
                let startingIndex = Number(commandInfo[1]);
                let charsAmt = Number(commandInfo[2]);
                let substring = string.substring(startingIndex, startingIndex + charsAmt);
                string = string.replace(substring, "");
                console.log(string);
                break;
            case "Substitute":
                let substringSearchingFor = commandInfo[1];
                let substitute = commandInfo[2];
                if (string.includes(substringSearchingFor)) {
                    while (string.includes(substringSearchingFor)) {
                        string = string.replace(substringSearchingFor, substitute);
                    }
                    console.log(string);
                } else {
                    console.log("Nothing to replace!");
                }
                break;
            default:
                break;
        }

        commandInfo = Input.shift().split(" ");
    }

    console.log(`Your password is: ${string}`);
}

Main(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])
