function Main(Input) {
    let dictionary = {};
    for (let i = 0; i < Input.length; i++) {
        let tempObject = JSON.parse(Input[i]);
        dictionary = Object.assign(dictionary, tempObject)
    }
    let printDictionary = Object.entries(dictionary);
    printDictionary.sort();
    for (const [term, def] of printDictionary) {
        console.log(`Term: ${term} => Definition: ${def}`);
    }
}

Main([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    
    ])