function Main(Input) {
    let students = Number(Input.shift());
    let lectures = Number(Input.shift());
    let bonus = Number(Input.shift());
    let currentMax = 0;
    let lecturesAttended = 0;

    for (let i = 0; i < students; i++) {
        let temp = Number(Input[i]) / lectures * (5 + bonus);

        if (temp > currentMax) {
            currentMax = temp;
            lecturesAttended = Number(Input[i]);
        }
    }

    console.log(`Max Bonus: ${Math.ceil(currentMax)}.`);
    console.log(`The student has attended ${lecturesAttended} lectures.`);
}

Main([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  )