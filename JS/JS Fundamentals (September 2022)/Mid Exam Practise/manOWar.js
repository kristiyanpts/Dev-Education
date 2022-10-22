function Main(Input) {
    let pirateShip = Input.shift().split('>').map(Number);
    let warShip = Input.shift().split('>').map(Number);
    let healthCapacityPerUnit = Number(Input.shift());

    let info = Input.shift().split(' ');
    let shouldBreak = false;

    while (info[0] !== "Retire") {
        switch (info[0]) {
            case "Fire":
                let index = Number(info[1]);
                let damageGiven = Number(info[2]);

                if (warShip[index] !== undefined) {
                    if (warShip[index] - damageGiven <= 0) {
                        warShip[index] = 0;
                        shouldBreak = true;
                        console.log("You won! The enemy ship has sunken.");
                        break;
                    } else {
                        warShip[index] = warShip[index] - damageGiven;
                    }
                }
                break;
            case "Defend":
                let startIndex = Number(info[1]);
                let endIndex = Number(info[2]);
                let damageTaken = Number(info[3]);

                if (pirateShip[startIndex] !== undefined && pirateShip[endIndex] !== undefined) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        if (pirateShip[i] - damageTaken <= 0) {
                            pirateShip[i] = 0;
                            shouldBreak = true;
                            console.log("You lost! The pirate ship has sunken.");
                            break; 
                        } else {
                            pirateShip[i] = pirateShip[i] - damageTaken;
                        }
                    } 
                }
                break;
            case "Repair":
                let indexToRepair = Number(info[1]);
                let healthRestored = Number(info[2]);
                if (pirateShip[indexToRepair] !== undefined) {
                    if (pirateShip[indexToRepair] + healthRestored >= healthCapacityPerUnit) {
                        pirateShip[indexToRepair] = healthCapacityPerUnit;
                    } else {
                        pirateShip[indexToRepair] = pirateShip[indexToRepair] + healthRestored;
                    }
                }
                break;
            case "Status":
                let sections = 0;
                let minHealth = 0.2 * healthCapacityPerUnit;
                for (let i = 0; i < pirateShip.length; i++) {
                    if (pirateShip[i] < minHealth) {
                        sections++;
                    }
                }
                console.log(`${sections} sections need repair.`);
                break;
            default:
                break;
        }

        if (shouldBreak) {
            break;
        }

        info = Input.shift().split(' ');
    }

    if (!shouldBreak) {
        let pirateShipSum = 0;
        let warShipSum = 0;
        for (let i = 0; i < pirateShip.length; i++) {
            pirateShipSum += pirateShip[i];
        }
        for (let i = 0; i < warShip.length; i++) {
            warShipSum += warShip[i];
        }
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warShipSum}`);
    }
}

Main(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])
