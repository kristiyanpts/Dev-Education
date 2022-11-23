function Main(Input) {
    let cars = {};
    let amtOfCars = Number(Input.shift());
    for (let i = 0; i < amtOfCars; i++) {
        let carInfo = Input.shift().split('|');
        cars[carInfo[0]] = {
            "mileage": Number(carInfo[1]),
            "fuel": Number(carInfo[2])
        }
    }
    let commandInfo = Input.shift().split(" : ");
    while (commandInfo[0] !== "Stop") {
        switch (commandInfo[0]) {
            case "Drive":
                let availableFuel = cars[commandInfo[1]]["fuel"];
                if (availableFuel >= Number(commandInfo[3])) {
                    cars[commandInfo[1]]["mileage"] += Number(commandInfo[2]);
                    cars[commandInfo[1]]["fuel"] -= Number(commandInfo[3]);
                    console.log(`${commandInfo[1]} driven for ${Number(commandInfo[2])} kilometers. ${Number(commandInfo[3])} liters of fuel consumed.`);
                } else {
                    console.log("Not enough fuel to make that ride");
                }
                if (cars[commandInfo[1]]["mileage"] >= 100000) {
                    delete cars[commandInfo[1]];
                    console.log(`Time to sell the ${commandInfo[1]}!`);
                }
                break;
            case "Refuel":
                let amountRefueled = 0;
                if (cars[commandInfo[1]]["fuel"] + Number(commandInfo[2]) >= 75) {
                    amountRefueled = 75 - cars[commandInfo[1]]["fuel"];
                    cars[commandInfo[1]]["fuel"] = 75;
                } else {
                    cars[commandInfo[1]]["fuel"] += Number(commandInfo[2]);
                    amountRefueled = Number(commandInfo[2]);
                }
                console.log(`${commandInfo[1]} refueled with ${amountRefueled} liters`);
                break;
            case "Revert":
                cars[commandInfo[1]]["mileage"] -= Number(commandInfo[2]);
                console.log(`${commandInfo[1]} mileage decreased by ${Number(commandInfo[2])} kilometers`);
                if (cars[commandInfo[1]]["mileage"] < 10000) {
                    cars[commandInfo[1]]["mileage"] = 10000;
                }
                break;
            default:
                break;
        }

        commandInfo = Input.shift().split(" : ");
    }

    for (const [car, carInfo] of Object.entries(cars)) {
        console.log(`${car} -> Mileage: ${carInfo["mileage"]} kms, Fuel in the tank: ${carInfo["fuel"]} lt.`);
    }
}

Main([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])