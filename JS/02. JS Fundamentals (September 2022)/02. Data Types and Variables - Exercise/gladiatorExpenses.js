function Main(lostFights, helmPrice, swordPrice, shieldPrice, armorPrice) {
    let finalPrice = 0;
    let brokenShields = 0;

    for (let i = 1; i <= lostFights; i++) {
        let brokenStuff = 0;
        if (i % 2 === 0) {
            finalPrice += helmPrice;
            brokenStuff++;
        }

        if (i % 3 === 0) {
            finalPrice += swordPrice;
            brokenStuff++;
        }

        if (brokenStuff === 2) {
            finalPrice += shieldPrice;
            brokenShields++;
        }

        if (brokenShields % 2 === 0 && brokenShields !== 0 && brokenStuff === 2) {
            finalPrice += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${finalPrice.toFixed(2)} aureus`);
}

Main(7,

    2,
    
    3,
    
    4,
    
    5)