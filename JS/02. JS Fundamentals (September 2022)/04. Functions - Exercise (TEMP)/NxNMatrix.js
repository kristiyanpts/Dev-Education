function Main(num) {
    for (let i = 0; i < num; i++) {
        let output = "";
        for (let k = 0; k < num; k++) {
            if (k == num - 1) {
                output += num;
            } else {
                output += num + " ";
            }
        }
        console.log(output);
    }
}

Main(7)