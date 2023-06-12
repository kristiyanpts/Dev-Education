function Main(Input) {
    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let output = [];

    while ((valid = pattern.exec(Input)) !== null) {
        output.push(valid[0])
    }

    console.log(output.join(" "));
}

Main("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")