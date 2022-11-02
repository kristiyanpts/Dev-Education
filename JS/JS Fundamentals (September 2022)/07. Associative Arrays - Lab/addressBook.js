function Main(Input) {
    let addressBook = {};
    for (let info of Input) {
        info = info.split(':');
        addressBook[info[0]] = info[1];
    }
    for (const [name, address] of Object.entries(addressBook).sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(`${name} -> ${address}`);
    }
}

Main(['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])