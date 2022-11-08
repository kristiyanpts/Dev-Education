function Main(Input) {
    let normalGuestsList = [];
    let vipGuestsList = [];
    let info = Input.shift();
    while (info !== "PARTY") {
        if (Number.isNaN(Number(info[0]))) {
            normalGuestsList.push(info);
        } else {
            vipGuestsList.push(info);
        }
        info = Input.shift();
    }
    while (Input.length > 0) {
        let guestComming = Input.shift();
        if (normalGuestsList.includes(guestComming)) {
            normalGuestsList.splice(normalGuestsList.indexOf(guestComming), 1);
        }
        if (vipGuestsList.includes(guestComming)) {
            vipGuestsList.splice(vipGuestsList.indexOf(guestComming), 1);
        }
    }
    console.log(vipGuestsList.length + normalGuestsList.length);
    for (const guest of vipGuestsList) {
        console.log(guest);
    }
    for (const guest of normalGuestsList) {
        console.log(guest);
    }
}

Main(['m8rfQBvl', '7IK9Yo0h', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ' ])