function Main(Input) {
    let i = 0;
    
    let prostiSum = 0;
    let neprostiSum = 0;

    function isPrime(num) {
        for (let i = 2; i * i <= num; i++)
            if (num % i === 0)
              return false; 
        return num > 1;
    }

    while (Input[i] !== "stop")
    {
        let tempNum = Number(Input[i]);
        if (tempNum >= 0)
        {
            let isProsto = isPrime(tempNum);
            if (isProsto)
            {
                prostiSum += tempNum;
            }
            else
            {
                neprostiSum += tempNum;
            }
        }
        else
        {
            console.log("Number is negative.");
        }
        i++;
    }

    console.log(`Sum of all prime numbers is: ${prostiSum}`);
    console.log(`Sum of all non prime numbers is: ${neprostiSum}`);
}

Main(["3",

"9",

"0",

"7",

"19",

"4",

"stop"])