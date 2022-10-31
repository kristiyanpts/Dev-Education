function Main(Input) {
    let towns = [];
    for (let i = 0; i < Input.length; i++) {
        let townInfo = Input[i].split(' | ');
        let tempTown = {
            "town": townInfo[0],
            "latitude": Number(townInfo[1]).toFixed(2),
            "longitude": Number(townInfo[2]).toFixed(2)
        }
        towns.push(tempTown)
    }
    for (let i = 0; i < towns.length; i++) {
        console.log(towns[i]);
    }
}

Main(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])