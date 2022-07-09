function Main(Input) {
    let name = Input[0];
    let i = 1;

    let hasBeenDeclined = false;
    let sum = 0;
    let grade = 1;

    while (Number(Input[i]) >= 4 || hasBeenDeclined === false) {
        let tempNum = Number(Input[i]);
        if (tempNum < 4)
        {
            hasBeenDeclined = true;
            grade = i;
            sum += Number(Input[i]);
        }
        else
        {
            sum += Number(Input[i]);
        }

        if (i === Input.length - 1)
        {
            break;
        }
        i++;
    }

    let avg = sum / (Input.length - 1);

    if (hasBeenDeclined)
    {
        console.log(`${name} has been excluded at ${grade} grade`);
    }
    else
    {
        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
    }
}

Main(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])