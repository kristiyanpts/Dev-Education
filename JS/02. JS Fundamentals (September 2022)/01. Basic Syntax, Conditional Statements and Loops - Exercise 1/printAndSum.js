function Main(start, end) {
    let sum = 0;
    let output = ""
    for (let i = start; i <= end; i++) {
        output += i + " ";
        sum += i;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}

Main(5, 10)