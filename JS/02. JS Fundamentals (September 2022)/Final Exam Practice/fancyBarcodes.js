function Main(Input) {
    let pattern = /@#+(?<barcode>[A-Z][A-Za-z\d]{4,}[A-Z])@#+/g;
    let amtOfProducts = Number(Input.shift());

    for (let i = 0; i < amtOfProducts; i++) {
        let tempProduct = Input.shift();
        let isValid = false;
        while((valid = pattern.exec(tempProduct)) !== null) {
            isValid = true;
            let group = [];
            for (const char of tempProduct) {
                let numbered = Number(char);
                if (!Number.isNaN(numbered)) {
                    group.push(numbered);
                }
            }
            group.length > 0 ? console.log(`Product group: ${group.join("")}`) : console.log(`Product group: 00`);
        }
        if (!isValid) {
            console.log("Invalid barcode");
        }
    }
}

Main((["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]))