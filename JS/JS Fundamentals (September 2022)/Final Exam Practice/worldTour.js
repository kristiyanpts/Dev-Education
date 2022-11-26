function Main(Input) {
    let stops = Input.shift();
    let commandInfo = Input.shift().split(":");

    while (commandInfo[0] !== "Travel") {
        switch (commandInfo[0]) {
            case "Add Stop":
                let index = Number(commandInfo[1]);
                let tempStop = commandInfo[2];
                stops = stops.slice(0, index) + tempStop + stops.slice(index);
                console.log(stops);
                break;
            case "Remove Stop":
                let startIndex = Number(commandInfo[1]);
                let endIndex = Number(commandInfo[2]);
                stops = stops.slice(0, startIndex) + stops.slice(endIndex + 1);
                console.log(stops);
                break;
            case "Switch":
                while(stops.includes(commandInfo[1])){
                    let splitted = stops.split(commandInfo[1]);
                    stops = splitted.join(commandInfo[2]);
                }
                console.log(stops);
                break;
            default:
                break;
        }

        commandInfo = Input.shift().split(':');
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

Main(["Hawai::Cyprys-Greece:Hawai:Hawai:Hawai",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
