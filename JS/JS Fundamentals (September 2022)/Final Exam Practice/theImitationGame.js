function Main(Input) {
    let decryptedMessage = Input.shift();
    let commandInfo = Input.shift().split("|");

    while (commandInfo[0] !== "Decode") {
        switch (commandInfo[0]) {
            case "Move":
                let amountOfLetters = Number(commandInfo[1]);
                let substringToMove = decryptedMessage.substring(0, amountOfLetters);
                decryptedMessage = decryptedMessage.replace(substringToMove, "");
                decryptedMessage = decryptedMessage.slice(0, decryptedMessage.length) + substringToMove;
                break;
            case "Insert":
                let index = Number(commandInfo[1]);
                let letter = commandInfo[2];
                let firstHalf = decryptedMessage.slice(0, index);
                let secondHalf = decryptedMessage.slice(index, decryptedMessage.length)
                decryptedMessage = firstHalf + letter + secondHalf;
                break;
            case "ChangeAll":
                let charToChange = commandInfo[1];
                let charToChangeWith = commandInfo[2];

                while (decryptedMessage.includes(charToChange)) {
                    decryptedMessage = decryptedMessage.replace(charToChange, charToChangeWith)
                }
                break;
            default:
                break;
        }
        commandInfo = Input.shift().split('|');
    }

    console.log(`The decrypted message is: ${decryptedMessage}`);
}

Main([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  )