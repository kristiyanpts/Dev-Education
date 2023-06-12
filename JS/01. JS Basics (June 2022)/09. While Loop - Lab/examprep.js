function Main(Input) {
    let notPleasingGrades = Number(Input[0]);
    let i = 1;
    let problemCount = 0;
    let notPleasingGradesCount = 0;
    let sum = 0;
    let avg = 0;
    let lastProblem = "";

    while (Input[i] !== "Enough")
    {
        lastProblem = Input[i];
        problemCount++;
        if (Number(Input[i + 1]) <= 4)
        {
            notPleasingGradesCount++;
            if (notPleasingGrades === notPleasingGradesCount)
            {
                break;
            }
        }
        sum += Number(Input[i + 1]);
        i += 2;
    }

    if (notPleasingGrades === notPleasingGradesCount)
    {
        console.log(`You need a break, ${notPleasingGradesCount} poor grades.`);
    }
    else
    {
        avg = sum / problemCount;
        console.log(`Average score: ${avg.toFixed(2)}`);
        console.log(`Number of problems: ${problemCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

Main(["2",

"Income",

"3",

"Game Info",

"6",

"Best Player",

"4"])