function Main(jsonObject) {
    let actualObject = JSON.parse(jsonObject);

    for (const k of Object.keys(actualObject)) {
        console.log(`${k}: ${actualObject[k]}`);
    }
}

Main('{"name": "George", "age": 40, "town": "Sofia"}')