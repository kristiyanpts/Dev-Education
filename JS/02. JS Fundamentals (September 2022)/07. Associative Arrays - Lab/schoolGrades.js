function Main(Input) {
    let studentsGrades = {};
    for (let info of Input) {
        info = info.split(' ');
        let student = info[0];
        if (studentsGrades.hasOwnProperty(student)) {
            for (let i = 1; i < info.length; i++) {
                studentsGrades[student] = studentsGrades[student] + " " + info[i];
            }
        } else {
            studentsGrades[student] = info[1]
            for (let i = 2; i < info.length; i++) {
                studentsGrades[student] = studentsGrades[student] + " " + info[i];
            }
        }
    }
    for (const [student, grades] of Object.entries(studentsGrades).sort((a, b) => a[0].localeCompare(b[0]))) {
        let tempGrades = grades.split(' ').map(Number);
        let gradeSum = 0;
        for (let i = 0; i < tempGrades.length; i++) {
            gradeSum += tempGrades[i];
        }
        let avgGrade = gradeSum / tempGrades.length;
        console.log(`${student}: ${avgGrade.toFixed(2)}`);
    }
}

Main(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6'])