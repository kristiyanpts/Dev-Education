function Main(Input) {
  let pattern = /([!])(?<command>[A-Z][a-z]{2,})\1:\[(?<string>[A-Za-z]{8,})]/g;
  let amtOfStrings = Number(Input.shift());

  for (let i = 0; i < amtOfStrings; i++) {
    let string = Input.shift();
    let isValidString = false;
    let command = "";

    while ((valid = pattern.exec(string)) !== null) {
      isValidString = true;
      string = valid.groups["string"];
      command = valid.groups["command"];
    }

    if (isValidString) {
      let asciiChars = [];

      for (let k = 0; k < string.length; k++) {
        asciiChars.push(string.charCodeAt(k));
      }

      console.log(`${command}: ${asciiChars.join(" ")}`);
    } else {
      console.log("The message is invalid");
    }
  }
}

Main([
  "3",
  "go:[outside]",
  "!drive!:YourCarToACarWash",
  "!Watch!:[LordofTheRings]",
]);
