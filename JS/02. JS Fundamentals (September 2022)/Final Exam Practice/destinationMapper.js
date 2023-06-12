function Main(Input) {
    let pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let travelPoints = 0;
    let destinations = [];

    while((valid = pattern.exec(Input)) !== null) {
        destinations.push(valid.groups["destination"]);
        travelPoints += valid.groups["destination"].length;
    }

    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}

Main("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")