function Main(Input) {
    let digits = Input.toString().split('');
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
    }

    console.log(sum);
}

Main(97561)