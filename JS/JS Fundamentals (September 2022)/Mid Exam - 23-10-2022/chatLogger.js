function Main(Input) {
    let length = Input.length;
    let chat = [];
    for (let i = 0; i < length; i++) {
        let info = Input.shift().split(' ');
        switch (info[0]) {
            case "Chat":
                chat.push(info[1]);
                break;
            case "Delete":
                if (chat.includes(info[1])) {
                    let indexOfMessage = chat.indexOf(info[1]);
                    chat.splice(indexOfMessage, 1);
                }
                break;
            case "Edit":
                let messageToEdit = info[1];
                let editedVersion = info[2];
                if (chat.includes(messageToEdit)) {
                    let indexOfMessage = chat.indexOf(messageToEdit);
                    chat[indexOfMessage] = editedVersion;
                }
                break;
            case "Pin":
                let messageToPin = info[1];
                if (chat.includes(messageToPin)) {
                    let indexOfMessage = chat.indexOf(messageToPin);
                    chat.splice(indexOfMessage, 1);
                    chat.push(messageToPin);
                }
                break;
            case "Spam":
                for (let i = 1; i < info.length; i++) {
                    chat.push(info[i]);
                }
                break;
            case "end":
                break;
            default:
                break;
        }
    }

    console.log(chat.join("\n"));
}

Main(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])
