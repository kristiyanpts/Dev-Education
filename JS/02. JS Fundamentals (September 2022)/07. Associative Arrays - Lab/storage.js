function Main(Input) {
    // let storage = {}; // Object
    // for (let info of Input) {
    //     info = info.split(' ');
    //     storage[info[0]] = storage.hasOwnProperty(info[0]) ? storage[info[0]] += Number(info[1]) : storage[info[0]] = Number(info[1]);
    // }
    // for (const [item, quanity] of Object.entries(storage)) {
    //     console.log(`${item} -> ${quanity}`);
    // }
    let storage = new Map(); // Map
    for (let info of Input) {
        info = info.split(' ');
        if (storage.has(info[0])) {
            storage.set(info[0], Number(info[1]) + storage.get(info[0]));
        } else {
            storage.set(info[0], Number(info[1]))
        }
    }
    for (let kvp of storage) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

Main(['apple 50',

'apple 61',

'coffee 115',

'coffee 40'])