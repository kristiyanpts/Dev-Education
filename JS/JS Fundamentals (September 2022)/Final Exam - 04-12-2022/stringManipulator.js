function Main(Input) {
  let myString = Input.shift();
  let commandInfo = Input.shift().split(" ");

  while (commandInfo[0] !== "End") {
    switch (commandInfo[0]) {
      case "Translate":
        let charToReplace = commandInfo[1];
        let charReplacement = commandInfo[2];

        while (myString.includes(charToReplace)) {
          myString = myString.replace(charToReplace, charReplacement);
        }
        console.log(myString);
        break;
      case "Includes":
        let substringSearchingFor = commandInfo[1];
        if (myString.includes(substringSearchingFor)) {
          console.log("True");
        } else {
          console.log("False");
        }
        break;
      case "Start":
        let substringToCheck = commandInfo[1];
        if (myString.indexOf(substringToCheck) === 0) {
          console.log("True");
        } else {
          console.log("False");
        }
        break;
      case "Lowercase":
        myString = myString.toLowerCase();
        console.log(myString);
        break;
      case "FindIndex":
        let charSearchingFor = commandInfo[1];
        console.log(myString.lastIndexOf(charSearchingFor));
        break;
      case "Remove":
        let startIndex = Number(commandInfo[1]);
        let charAmount = Number(commandInfo[2]);
        let startingLength = myString.length;
        myString =
          myString.slice(0, startIndex) +
          myString.slice(startIndex + charAmount, startingLength);
        console.log(myString);
        break;
      default:
        break;
    }

    commandInfo = Input.shift().split(" ");
  }
}

Main([
  "*S0ftUni is the B3St Plac3**",
  "Translate 2 o",
  "Includes best",
  "Start the",
  "Lowercase",
  "FindIndex p",
  "Remove 2 7",
  "End",
]);
