function Main(Input) {
    let startSongs = Number(Input.shift());
    let songs = {};
    for (let i = 0; i < startSongs; i++) {
        let songInfo = Input.shift().split('|');
        songs[songInfo[0]] = {
            "compositor": songInfo[1],
            "key": songInfo[2]
        }
    }
    let commandInfo = Input.shift().split('|');
    while (commandInfo[0] !== "Stop") {
        switch (commandInfo[0]) {
            case "Add":
                if (songs.hasOwnProperty(commandInfo[1])) {
                    console.log(`${commandInfo[1]} is already in the collection!`);
                } else {
                    songs[commandInfo[1]] = {
                        "compositor": commandInfo[2],
                        "key": commandInfo[3]
                    }
                    console.log(`${commandInfo[1]} by ${commandInfo[2]} in ${commandInfo[3]} added to the collection!`);
                }
                break; 
            case "Remove":
                if (songs.hasOwnProperty(commandInfo[1])) {
                    delete songs[commandInfo[1]];
                    console.log(`Successfully removed ${commandInfo[1]}!`);
                } else {
                    console.log(`Invalid operation! ${commandInfo[1]} does not exist in the collection.`);
                }
                break;
            case "ChangeKey":
                if (songs.hasOwnProperty(commandInfo[1])) {
                    songs[commandInfo[1]]["key"] = commandInfo[2];
                    console.log(`Changed the key of ${commandInfo[1]} to ${commandInfo[2]}!`);
                } else {
                    console.log(`Invalid operation! ${commandInfo[1]} does not exist in the collection.`);
                }
                break;
            default:
                break;
        }

        commandInfo = Input.shift().split('|');
    }

    for (const [song, songInfo] of Object.entries(songs)) {
        console.log(`${song} -> Composer: ${songInfo["compositor"]}, Key: ${songInfo["key"]}`);
    }
}

Main([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  )