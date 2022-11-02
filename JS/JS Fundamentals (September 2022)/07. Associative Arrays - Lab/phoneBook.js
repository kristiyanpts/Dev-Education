function Main(Input) {
    let phoneBook = {};
    for (let info of Input) {
        info = info.split(' ');
        phoneBook[info[0]] = info[1];
    }
    for (const [person, phone] of Object.entries(phoneBook)) {
        console.log(`${person} -> ${phone}`);
    }
}

Main(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])