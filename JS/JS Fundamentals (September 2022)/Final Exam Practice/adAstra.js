function Main(Input) {
    let pattern = /([|#])(?<product>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let totalCalories = 0;
    let items = [];
    while ((valid = pattern.exec(Input)) !== null) {
        totalCalories += Number(valid[4]);
        items.push({item: valid[2], date: valid[3], nutrition: valid[4]})
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    for (let i = 0; i < items.length; i++) {
        console.log(`Item: ${items[i].item}, Best before: ${items[i].date}, Nutrition: ${items[i].nutrition}`);   
    }
}

Main(['Hello|#Invalid food#19/03/20#450|$5*(@'])