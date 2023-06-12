function Main(Input)
{
    let firstDigit = Number(Input[0]);
    let secondDigit = Number(Input[1]);
    let thirdDigit = Number(Input[2]);

    for (let i = 100; i <= 999; i++) {
        let output = " ";
        let stringedI = i.toString();
        let isFirstDigitCompatible = false;
        let isSecondDigitCompatible = false;
        let isThirdDigitCompatible = false;

        if (Number(stringedI[0]) <= firstDigit && Number(stringedI[0]) % 2 === 0 && Number(stringedI[0]) !== 0)
        {
            isFirstDigitCompatible = true;
        }

        if (Number(stringedI[2]) <= thirdDigit && Number(stringedI[2]) % 2 === 0 && Number(stringedI[2]) !== 0)
        {
            isThirdDigitCompatible = true;
        }

        let isPrime = false;
        if (Number(stringedI[1]) >= 2 && Number(stringedI[1]) <= 7)
        {
            isPrime = true;
        }
        for (let k = 2; k * k <= Number(stringedI[1]); k++)
        {
            if (Number(stringedI[1]) % k === 0)
            {
                isPrime = false;
            }
        } 
        if (isPrime && Number(stringedI[1]) <= secondDigit)
        {
            isSecondDigitCompatible = true;
        }

        if (isFirstDigitCompatible && isSecondDigitCompatible && isThirdDigitCompatible)
        {
            output += stringedI[0] + " " + stringedI[1] + " " + stringedI[2];
            console.log(output);
        }
    }
}

Main(["8",
"2",
"8"])