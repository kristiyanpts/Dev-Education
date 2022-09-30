function Main(Input) {
    let user = Input[0];
    let correctPass = user.split("").reverse().join("");
    let i = 1;
    while (true) {
        if (correctPass == Input[i]) {
            console.log(`User ${user} logged in.`);
            break;
        } else {
            if (i === 4) {
                console.log(`User ${user} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");
        }
        i++;
    }
}

Main(['sunny','rainy','cloudy','sunny','not sunny'])