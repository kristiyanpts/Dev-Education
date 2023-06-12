function Main(Input) {
    let movies = [];
    for (let i = 0; i < Input.length; i++) {
        let commandInfo = Input[i].split('addMovie ');
        if (commandInfo[0] == '') {
            let tempMovie = {
                "name": commandInfo[1]
            }
            movies.push(tempMovie);
        }
        commandInfo = Input[i].split(' directedBy ');
        for (let k = 0; k < movies.length; k++) {
            if (movies[k].name === commandInfo[0]) {
                movies[k].director = commandInfo[1];
            }
        }
        commandInfo = Input[i].split(' onDate ');
        for (let k = 0; k < movies.length; k++) {
            if (movies[k].name === commandInfo[0]) {
                movies[k].date = commandInfo[1];
            }
        }
    }
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].hasOwnProperty("name") && movies[i].hasOwnProperty("director") && movies[i].hasOwnProperty("date")) {
            console.log(JSON.stringify(movies[i]));
        }
    }
}

Main([

    'addMovie The Avengers',
    
    'addMovie Superman',
    
    'The Avengers directedBy Anthony Russo',
    
    'The Avengers onDate 30.07.2010',
    
    'Captain America onDate 30.07.2010',
    
    'Captain America directedBy Joe Russo'
    
    ])