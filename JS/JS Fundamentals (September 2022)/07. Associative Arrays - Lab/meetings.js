function Main(Input) {
    let schedule = {};
    for (let info of Input) {
        info = info.split(' ');
        if (schedule.hasOwnProperty(info[0])) {
            console.log(`Conflict on ${info[0]}!`);
        } else {
            schedule[info[0]] = info[1];
            console.log(`Scheduled for ${info[0]}`);
        }
    }
    for (const [day, person] of Object.entries(schedule)) {
        console.log(`${day} -> ${person}`);
    }
}

Main(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])