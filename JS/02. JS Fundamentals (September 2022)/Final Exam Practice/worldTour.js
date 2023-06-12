function Main(Input) {
  let stops = Input.shift();
  let commandInfo = Input.shift().split(":");

  while (commandInfo[0] !== "Travel") {
    switch (commandInfo[0]) {
      case "Add Stop":
        let index = Number(commandInfo[1]);
        if (index >= 0 && index < stops.length) {
          let tempStop = commandInfo[2];
          stops = stops.slice(0, index) + tempStop + stops.slice(index);
        }
        break;
      case "Remove Stop":
        let startIndex = Number(commandInfo[1]);
        let endIndex = Number(commandInfo[2]);
        if (
          startIndex >= 0 &&
          startIndex < stops.length &&
          endIndex >= 0 &&
          endIndex < stops.length &&
          startIndex <= endIndex
        ) {
          stops = stops.slice(0, startIndex) + stops.slice(endIndex + 1);
        }
        break;
      case "Switch":
        let rgx = new RegExp(commandInfo[1], "g");
        stops = stops.replace(rgx, commandInfo[2]);
        break;
      default:
        break;
    }

    console.log(stops);
    commandInfo = Input.shift().split(":");
  }

  console.log(`Ready for world tour! Planned stops: ${stops}`);
}

Main([
  "Hawai::Cyprys-Greece:Hawai:Hawai:Hawai",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
