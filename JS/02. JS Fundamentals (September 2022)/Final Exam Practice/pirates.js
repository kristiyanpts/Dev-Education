function Main(Input) {
    let cities = {};
    let citiesCommandInfo = Input.shift().split('||');

    while (citiesCommandInfo[0] !== "Sail") {
        let city = citiesCommandInfo[0];
        let population = Number(citiesCommandInfo[1]);
        let gold = Number(citiesCommandInfo[2]);
        if (cities.hasOwnProperty(city)) {
            cities[city]["population"] += population;
            cities[city]["gold"] += gold;
        } else {
            cities[city] = {
                "population": population,
                "gold": gold
            }
        }

        citiesCommandInfo = Input.shift().split('||');
    }

    let eventsCommandInfo = Input.shift().split("=>");
    
    while (eventsCommandInfo[0] !== "End") {
        let town = eventsCommandInfo[1];
        switch (eventsCommandInfo[0]) {
            case "Plunder":
                let peopleKilled = Number(eventsCommandInfo[2]);
                let goldStolen = Number(eventsCommandInfo[3]);
                cities[town]["population"] -= peopleKilled;
                cities[town]["gold"] -= goldStolen;
                console.log(`${town} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);
                if (cities[town]["population"] <= 0 || cities[town]["gold"] <= 0) {
                    delete cities[town];
                    console.log(`${town} has been wiped off the map!`);
                }
                break;
            case "Prosper":
                let goldAmount = Number(eventsCommandInfo[2]);
                if (goldAmount < 0) {
                    console.log("Gold added cannot be a negative number!");
                } else {
                    cities[town]["gold"] += goldAmount;
                    console.log(`${goldAmount} gold added to the city treasury. ${town} now has ${cities[town]["gold"]} gold.`);
                }
                break;
            default:
                break;
        }

        eventsCommandInfo = Input.shift().split("=>");
    }

    if (Object.keys(cities).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        for (const [city, cityInfo] of Object.entries(cities)) {
            console.log(`${city} -> Population: ${cityInfo["population"]} citizens, Gold: ${cityInfo["gold"]} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

Main(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])
