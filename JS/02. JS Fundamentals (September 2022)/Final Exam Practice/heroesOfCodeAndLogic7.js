function Main(Input) {
    let heroes = {};
    let amtOfHeroes = Number(Input.shift());
    for (let i = 0; i < amtOfHeroes; i++) {
        let heroInfo = Input.shift().split(" ");
        heroes[heroInfo[0]] = {
            "hp": Number(heroInfo[1]),
            "mp": Number(heroInfo[2])
        }
    }
    let commandInfo = Input.shift().split(' - ');
    while (commandInfo[0] !== "End") {
        let heroName = commandInfo[1];
        switch (commandInfo[0]) {
            case "CastSpell":
                let mpNeeded = Number(commandInfo[2]);
                let spellName = commandInfo[3];
                if (heroes[heroName]["mp"] >= mpNeeded) {
                    heroes[heroName]["mp"] -= mpNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName]["mp"]} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case "TakeDamage":
                let damageTaken = Number(commandInfo[2]);
                let attacker = commandInfo[3];
                if (heroes[heroName]["hp"] - damageTaken > 0) {
                    heroes[heroName]["hp"] -= damageTaken;
                    console.log(`${heroName} was hit for ${damageTaken} HP by ${attacker} and now has ${heroes[heroName]["hp"]} HP left!`);
                } else {
                    delete heroes[heroName];
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
                break;
            case "Recharge":
                let amount = Number(commandInfo[2]);
                let manaRecharged = 0;
                if (heroes[heroName]["mp"] + amount > 200) {
                    manaRecharged = 200 - heroes[heroName]["mp"];
                    heroes[heroName]["mp"] = 200;
                } else {
                    heroes[heroName]["mp"] += amount;
                    manaRecharged = amount;
                }
                console.log(`${heroName} recharged for ${manaRecharged} MP!`);
                break;
            case "Heal":
                let healAmount = Number(commandInfo[2]);
                let healthRecovered = 0;
                if (heroes[heroName]["hp"] + healAmount > 100) {
                    healthRecovered = 100 - heroes[heroName]["hp"];
                    heroes[heroName]["hp"] = 100;
                } else {
                    heroes[heroName]["hp"] += healAmount;
                    healthRecovered = healAmount;
                }
                console.log(`${heroName} healed for ${healthRecovered} HP!`);
                break;
            default:
                break;
        }

        commandInfo = Input.shift().split(" - ");
    }

    for (const [hero, heroInfo] of Object.entries(heroes)) {
        console.log(`${hero}\n HP: ${heroInfo["hp"]}\n MP: ${heroInfo["mp"]}`);
    }
}

Main([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End",

])