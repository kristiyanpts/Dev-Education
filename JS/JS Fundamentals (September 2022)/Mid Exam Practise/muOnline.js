function Main(Input) {
    let health = 100;
    let bitcoins = 0;
    let rooms = Input.split("|");

    for (let i = 0; i < rooms.length; i++) {
        let tempRoom = rooms[i].split(' ');
        switch (tempRoom[0]) {
            case "potion":
                let healAmt = Number(tempRoom[1]);
                let healedFor = 0;
                if (health + healAmt > 100) {
                    healedFor = 100 - health;
                    health = 100;
                } else {
                    health += healAmt;
                    healedFor = healAmt;
                }
                console.log(`You healed for ${healedFor} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                let bitcoinsFound = Number(tempRoom[1]);
                bitcoins += bitcoinsFound;
                console.log(`You found ${bitcoinsFound} bitcoins.`);
                break;
            default:
                let monsterAttack = Number(tempRoom[1]);
                if (health - monsterAttack > 0) {
                    console.log(`You slayed ${tempRoom[0]}.`);
                    health -= monsterAttack;
                } else {
                    console.log(`You died! Killed by ${tempRoom[0]}.`);
                    console.log(`Best room: ${i + 1}`);
                    health = 0;
                }
                break;
        }

        if (health === 0) {
            break;
        }
    }

    if (health > 0) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

Main("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")