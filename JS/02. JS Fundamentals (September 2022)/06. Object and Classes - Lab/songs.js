function Main(Input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        printName() {
            console.log(this.name);
        }
    }

    let listTypeToPrint = Input.pop();
    let songsAmt = Input.shift();
    for (let i = 0; i < songsAmt; i++) {
        let songInfo = Input.shift().split("_");
        let tempSong = new Song(songInfo[0], songInfo[1], songInfo[2]);

        if (listTypeToPrint ===  songInfo[0] || listTypeToPrint === "all") {
            tempSong.printName();
        }
    }
}

Main([4,

    'favourite_DownTown_3:14',
    
    'listenLater_Andalouse_3:24',
    
    'favourite_In To The Night_3:58',
    
    'favourite_Live It Up_3:48',
    
    'listenLater'])