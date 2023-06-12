function Main(Input) {
    let numbers = [];
    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;

    while ((valid = pattern.exec(Input)) !== null) {
        numbers.push(valid[0])
    }

    console.log(numbers.join(", "));
}

Main(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])