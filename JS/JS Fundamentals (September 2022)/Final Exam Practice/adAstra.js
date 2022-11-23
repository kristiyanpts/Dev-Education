function Main(Input) {
    let pattern = /([|#])(?<food>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let totalCalories = 0;
    let items = {};
    while ((valid = pattern.exec(Input)) !== null) {
        totalCalories += Number(valid[4]);
        items[valid[2]] = {
            "validUntil": valid[3],
            "nutrition": valid[4]
        }
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    for (const [food, foodInfo] of Object.entries(items)) {
        console.log(`Item: ${food}, Best before: ${foodInfo["validUntil"]}, Nutrition: ${foodInfo["nutrition"]}`);   
    }
}

Main([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )