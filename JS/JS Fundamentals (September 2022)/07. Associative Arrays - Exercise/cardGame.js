function Main(Input) {
    let players = {};
    for (let person of Input) {
        person = person.split(': ');
        let cards = person[1].split(', ');

        cards = [...new Set(cards)]
        for (const newCard of cards) {
            if (players.hasOwnProperty(person[0])) {
                let alreadyHasCard = false;
                for (const card of players[person[0]]) {
                    if (card == newCard) {
                        alreadyHasCard = true;
                    }
                }
                if (!alreadyHasCard) {
                    players[person[0]].push(newCard);
                }
            } else {
                players[person[0]] = cards;
            }
        }
    }

    let jToA = { "J": 11, "Q": 12, "K": 13, "A": 14 }
    let types = { "S": 4, "H": 3, "D": 2, "C": 1 }
    for (const [person, cards] of Object.entries(players)) {
        let score = 0;
        for (let cardInfo of cards) {
            cardInfo = cardInfo.split('');
            if (cardInfo.length === 3) {
                score += 10 * types[cardInfo[2]];
            } else {
                if (jToA.hasOwnProperty(cardInfo[0])) {
                    score += jToA[cardInfo[0]] * types[cardInfo[1]];
                } else {
                    score += Number(cardInfo[0]) * types[cardInfo[1]];
                }
            }
        }
        console.log(`${person}: ${score}`);
    }
}

Main([

    'John: 2C, 4H, 9H, AS, QS',
    
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'John: JD, JD, JD, JD'
    
    ])