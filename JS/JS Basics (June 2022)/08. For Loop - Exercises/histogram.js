function Main(Input) {
    let diapason = Number(Input[0]);

    let numbers = [];

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 0; i < diapason; i++) {
        numbers[numbers.length] = Input[i + 1];
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 200)
        {
            p1++;
        }
        else if (numbers[i] >= 200 && numbers[i] < 400)
        {
            p2++;
        }
        else if (numbers[i] >= 400 && numbers[i] < 600)
        {
            p3++;
        }
        else if (numbers[i] >= 600 && numbers[i] < 800)
        {
            p4++;
        }
        else if (numbers[i] >= 800)
        {
            p5++;
        }
    }

    p1 = p1 / diapason * 100;
    p2 = p2 / diapason * 100;
    p3 = p3 / diapason * 100;
    p4 = p4 / diapason * 100;
    p5 = p5 / diapason * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}

Main(["3",

"1",

"2",

"999"])