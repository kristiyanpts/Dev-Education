function Main(string, timesToR) {
    let output = "";
    for (let i = 0; i < timesToR; i++) {
        output += string;
    }

    console.log(output);
}

Main("abc", 3)