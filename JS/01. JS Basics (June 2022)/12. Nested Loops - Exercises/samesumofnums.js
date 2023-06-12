function Main(Input) {
    let n1 = Number(Input[0]);
    let n2 = Number(Input[1]);

    let output = ""

    for (let i = n1; i <= n2; i++) {
        let even = 0;
        let odd = 0;
        let stringedNumber = i.toString();

        for (let k = 0; k < stringedNumber.length; k++) {
            if (k % 2 === 0)
            {
                even += Number(stringedNumber[k]);
            }
            else
            {
                odd += Number(stringedNumber[k]);
            }
        }

        if (even === odd)
        {
            output += i + " "
        }
    }

    console.log(output);
}

Main(["123456",

"124000"])