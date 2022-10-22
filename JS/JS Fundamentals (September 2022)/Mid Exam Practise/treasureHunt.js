function Main(Input) {
    let loot = Input.shift().split('|');
    let info = Input.shift().split(' ');

    while (info[0] !== "Yohoho!") {
        switch (info[0]) {
            case "Loot":
                for (let i = 1; i < info.length; i++) {
                    if (!loot.includes(info[i])) {
                        loot.unshift(info[i]);
                    }
                }
                break;
            case "Drop":
                let index = Number(info[1]);
                if (loot[index] !== undefined) {
                    let elementAtIndex = loot.splice(index, 1);
                    loot.push(elementAtIndex);
                }
                break;
            case "Steal":
                let stolenItems = [];
                let amountOfItemsToSteal = Number(info[1]);
                let startingLength = loot.length;
                if (startingLength - amountOfItemsToSteal <= 0) {
                    while (loot.length > 0) {
                        let elementAtIndex = loot.splice(loot.length - 1, 1);
                        stolenItems.push(elementAtIndex);
                    }
                } else {
                    while (loot.length > startingLength - amountOfItemsToSteal) {
                        let elementAtIndex = loot.splice(loot.length - 1, 1);
                        stolenItems.push(elementAtIndex);
                    }
                }
                console.log(stolenItems.reverse().join(", "));
                break;
            default:
                break;
        }
        info = Input.shift().split(' ');
    }

    if (loot.length !== 0) {
        let lengthSum = 0;
        for (let i = 0; i < loot.length; i++) {
            lengthSum += loot[i].length;
        }
        let avgGain = lengthSum / loot.length;
        console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
}

Main(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
