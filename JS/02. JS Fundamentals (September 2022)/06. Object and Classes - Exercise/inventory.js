function Main(Input) {
    let heroes = [];
    for (let i = 0; i < Input.length; i++) {
        let heroInfo = Input[i].split(' / ');
        heroes.push({ "name": heroInfo[0], "level": Number(heroInfo[1]), "items": heroInfo[2] })
    }
    heroes.sort((a, b) => a.level - b.level)
    for (let i = 0; i < heroes.length; i++) {
        console.log(`Hero: ${heroes[i].name}`);
        console.log(`level => ${heroes[i].level}`);
        console.log(`items => ${heroes[i].items}`);
    }
}

Main([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])