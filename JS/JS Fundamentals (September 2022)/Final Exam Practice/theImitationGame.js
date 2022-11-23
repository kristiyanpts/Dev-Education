function Main(Input) {
    let decryptedMessage = Input.shift().split('');
    let commandInfo = Input.shift().split("|");

    while (commandInfo[0] !== "Decode") {
        switch (commandInfo[0]) {
            case "Move":
                let amountOfLetters = Number(commandInfo[1]);
                for (let i = 0; i < amountOfLetters; i++) {
                    decryptedMessage.push(decryptedMessage.shift());
                }
                break;
            case "Insert":
                let index = Number(commandInfo[1]);
                let letter = commandInfo[2];
                decryptedMessage.splice(index, 0, letter);
                break;
            case "ChangeAll":
                let charToChange = commandInfo[1];
                let charToChangeWith = commandInfo[2];

                while (decryptedMessage[decryptedMessage.indexOf(charToChange)] !== undefined) {
                    decryptedMessage[decryptedMessage.indexOf(charToChange)] = charToChangeWith;
                }
                break;
            default:
                break;
        }
        commandInfo = Input.shift().split('|');
    }

    console.log(`The decrypted message is: ${decryptedMessage.join("")}`);
}

Main([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
  'Insert|9|?',
  'Decode'
]
  )