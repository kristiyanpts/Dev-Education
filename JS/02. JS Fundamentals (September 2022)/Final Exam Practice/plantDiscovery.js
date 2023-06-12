function Main(Input) {
  let Plants = {};
  let plantsAmt = Number(Input.shift());

  for (let i = 0; i < plantsAmt; i++) {
    let plantInfo = Input.shift().split("<->");
    let plantToAdd = plantInfo[0];
    let plantRarity = Number(plantInfo[1]);
    if (Plants.hasOwnProperty(plantToAdd)) {
      Plants[plantToAdd].rarity = plantRarity;
    } else {
      Plants[plantToAdd] = {
        rarity: plantRarity,
        rating: [],
      };
    }
  }

  let commandInfo = Input.shift().split(": ");

  while (commandInfo[0] !== "Exhibition") {
    let plantInfo = commandInfo[1].split(" - ");
    let tempPlant = plantInfo[0];
    let secondProperty = Number(plantInfo[1]);
    switch (commandInfo[0]) {
      case "Rate":
        if (Plants.hasOwnProperty(tempPlant)) {
          Plants[tempPlant].rating.push(secondProperty);
        } else {
          console.log("error");
        }
        break;
      case "Update":
        if (Plants.hasOwnProperty(tempPlant)) {
          Plants[tempPlant].rarity = secondProperty;
        } else {
          console.log("error");
        }
        break;
      case "Reset":
        if (Plants.hasOwnProperty(tempPlant)) {
          Plants[tempPlant].rating = [];
        } else {
          console.log("error");
        }
        break;
      default:
        break;
    }

    commandInfo = Input.shift().split(": ");
  }

  console.log("Plants for the exhibition:");
  for (const [plant, plantInfo] of Object.entries(Plants)) {
    let sum = 0;
    for (const rating of plantInfo.rating) {
      sum += rating;
    }
    let avg = plantInfo.rating.length > 0 ? sum / plantInfo.rating.length : sum;
    console.log(
      `- ${plant}; Rarity: ${plantInfo.rarity}; Rating: ${avg.toFixed(2)}`
    );
  }
}

Main([
  "3",

  "Arnoldii<->4",

  "Woodii<->7",

  "Welwitschia<->2",

  "Rate: Woodii - 10",

  "Rate: Welwitschia - 7",

  "Rate: Arnoldii - 3",

  "Rate: Woodii - 5",

  "Update: Woodii - 5",

  "Reset: Arnoldii",

  "Exhibition",
]);
