function Main(Input) {
    let key = Input.shift();
    let commandInfo = Input.shift().split('>>>');

    while (commandInfo[0] !== "Generate") {
        switch (commandInfo[0]) {
            case "Contains":
                let substringSearchingFor = commandInfo[1];
                if (key.includes(substringSearchingFor)) {
                    console.log(`${key} contains ${substringSearchingFor}`);
                } else {
                    console.log("Substring not found!");
                }
                break;
            case "Flip":
                let caseScenario = commandInfo[1];
                let startIndex = Number(commandInfo[2]);
                let endIndex = Number(commandInfo[3]);
                let substring = key.substring(startIndex, endIndex);
                let newSubstring = "";
                if (caseScenario === "Upper") {
                    newSubstring = substring.toUpperCase();
                } else {
                    newSubstring = substring.toLowerCase();
                }
                key = key.replace(substring, newSubstring);
                console.log(key);
                break;
            case "Slice":
                let startSliceIndex = Number(commandInfo[1]);
                let endSliceIndex = Number(commandInfo[2]);
                // console.log(key.slice(0, startSliceIndex), key.slice(startSliceIndex, startSliceIndex + endSliceIndex), key.slice(startSliceIndex + endSliceIndex, key.length - 1));
                key = key.slice(0, startSliceIndex) + key.slice(endSliceIndex, key.length);
                console.log(key);
                break;
            default:
                break;
        }

        commandInfo = Input.shift().split('>>>');
    }

    console.log(`Your activation key is: ${key}`);
}

Main((["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
)