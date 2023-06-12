function Main(Input) {
    let concealedMessage = Input.shift();
    let commandInfo = Input.shift().split(':|:');

    while (commandInfo[0] !== "Reveal") {
        switch (commandInfo[0]) {
            case "InsertSpace":
                let index = Number(commandInfo[1]);
                concealedMessage = concealedMessage.slice(0, index) + " " + concealedMessage.slice(index);
                console.log(concealedMessage);
                break;
            case "Reverse":
                let substring = commandInfo[1];
                if (concealedMessage.includes(substring)) {
                    concealedMessage = concealedMessage.replace(substring, Array.from(substring).reverse().join(""));
                    console.log(concealedMessage);
                } else {
                    console.log("error");
                }
                break;
            case "ChangeAll":
                let substringToChange = commandInfo[1];
                let changeWith = commandInfo[2];
                while (concealedMessage.includes(substringToChange)) {
                    concealedMessage = concealedMessage.replace(substringToChange, changeWith)
                }
                console.log(concealedMessage);
                break;
            default:
                break;
        }

        commandInfo = Input.shift().split(':|:');
    }

    console.log(`You have a new text message: ${concealedMessage}`);
}

Main([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  )