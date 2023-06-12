function Main(Input) {
    let houses = Input.shift().split('@');
    let i = 0;
    let currentHouse = 0;

    while (Input[i] !== "Love!") {
        let info = Input[i].split(' ');
        if (info[0] === "Jump") {
            let housesToJump = Number(info[1]);
            currentHouse += housesToJump;

            if (currentHouse >= 0 && currentHouse < houses.length) {
                if (houses[currentHouse] - 2 > 0) {
                    houses[currentHouse] = houses[currentHouse] - 2;
                } else if (houses[currentHouse] - 2 === 0) {
                    houses[currentHouse] = houses[currentHouse] - 2;
                    console.log(`Place ${currentHouse} has Valentine's day.`);
                } else if (houses[currentHouse] === 0) {
                    console.log(`Place ${currentHouse} already had Valentine's day.`);
                }
            } else {
                currentHouse = 0;
                if (houses[currentHouse] - 2 > 0) {
                    houses[currentHouse] = houses[currentHouse] - 2;
                } else if (houses[currentHouse] - 2 === 0) {
                    houses[currentHouse] = houses[currentHouse] - 2;
                    console.log(`Place ${currentHouse} has Valentine's day.`);
                } else if (houses[currentHouse] === 0) {
                    console.log(`Place ${currentHouse} already had Valentine's day.`);
                }
            }
        }
        i++;
    }

    let allHousesHadValentine = true;
    let houseCount = 0;

    for (let i = 0; i < houses.length; i++) {
        if (houses[i] > 0) {
            allHousesHadValentine = false;
            houseCount++;
        }
    }

    console.log(`Cupid's last position was ${currentHouse}.`);
    allHousesHadValentine === true ? console.log("Mission was successful.") : console.log(`Cupid has failed ${houseCount} places.`);
}

Main(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])
