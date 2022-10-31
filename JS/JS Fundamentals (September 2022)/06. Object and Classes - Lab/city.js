function Main(cityObject) {
    for (const k of Object.keys(cityObject)) {
        console.log(`${k} -> ${cityObject[k]}`);
    }
}

Main({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })