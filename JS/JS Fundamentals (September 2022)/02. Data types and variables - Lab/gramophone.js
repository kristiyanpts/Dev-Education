function Main(band, album, song) {
    let songDuration = (album.length * band.length) * song.length / 2;
    let timesSpun = songDuration / 2.5;

    console.log(`The plate was rotated ${Math.ceil(timesSpun)} times.`);
}

Main('Black Sabbath', 'Paranoid', 'War Pigs')